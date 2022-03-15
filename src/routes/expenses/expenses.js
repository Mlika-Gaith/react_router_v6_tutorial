import styles from "./expenses.module.css";
import { getExpenses } from "./../../data/expenses";
import { NavLink, Outlet } from "react-router-dom";
function Expenses() {
  let expenses = getExpenses();
  return (
    <main className={styles.container}>
      <div className={styles.text_container}>
        <h2>Your expenses</h2>
      </div>

      <div className={styles.expenses_container}>
        <div className={styles.expenses}>
          {expenses.map((expense) => (
            <NavLink
              to={`/expenses/${expense.number}`}
              key={expense.number}
              className={styles.expense_link}
            >
              {expense.name}
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </main>
  );
}
export default Expenses;
