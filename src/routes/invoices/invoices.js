import { getInvoices } from "../../data/Data";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import styles from "./invoices.module.css";
import Footer from "../../components/Footer/Footer";
function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <main className={styles.container}>
        <div className={styles.invoices}>
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
          <div className={styles.invoice_items}>
            {invoices
              .filter((invoice) => {
                let filter = searchParams.get("filter");
                if (!filter) return true;
                let name = invoice.name.toLowerCase();
                return name.startsWith(filter.toLowerCase());
              })
              .map((invoice) => (
                <NavLink
                  to={`/invoices/${invoice.number}`}
                  key={invoice.number}
                  className={styles.invoice_link}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#9a8c98" : "",
                    };
                  }}
                >
                  {invoice.name}
                </NavLink>
              ))}
          </div>
        </div>

        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default Invoices;
