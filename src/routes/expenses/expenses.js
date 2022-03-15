import styles from "./expenses.module.css";
import { getExpenses } from "./../../data/expenses";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
function Expenses() {
  let expenses = getExpenses();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <main className={styles.container}>
      <div className={styles.text_container}>
        <h2>Your expenses</h2>
      </div>

      <div className={styles.expenses_container}>
        <div className={styles.expenses}>
          <div className={styles.search_area}>
            <input
              value={searchParams.get("filter") || ""}
              onChange={(event) => {
                let filter = event.target.value;
                if (filter) {
                  setSearchParams({ filter });
                } else {
                  setSearchParams({});
                }
              }}
              placeholder="Search ..."
            />
          </div>
          <div className={styles.expenses_items}>
            {expenses
              .filter((invoice) => {
                let filter = searchParams.get("filter");
                if (!filter) return true;
                let name = invoice.name.toLowerCase();
                return name.startsWith(filter.toLowerCase());
              })
              .map((expense) => (
                <NavLink
                  to={`/expenses/${expense.number}`}
                  key={expense.number}
                  className={styles.expense_link}
                  style={({ isActive }) => {
                    return { color: isActive ? "#9a8c98" : "" };
                  }}
                >
                  {expense.name}
                </NavLink>
              ))}
          </div>
        </div>
        <Outlet />
      </div>
    </main>
  );
}
export default Expenses;
