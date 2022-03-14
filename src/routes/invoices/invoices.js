import { getInvoices } from "../../data/Data";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./invoices.module.css";
import Footer from "../../components/Footer/Footer";
function Invoices() {
  let invoices = getInvoices();
  return (
    <>
      <main className={styles.container}>
        <div className={styles.invoices}>
          {invoices.map((invoice) => (
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

        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default Invoices;
