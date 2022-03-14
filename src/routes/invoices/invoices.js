import { getInvoices } from "../../data/Data";
import { Link, Outlet } from "react-router-dom";
import styles from "./invoices.module.css";
function Invoices() {
  let invoices = getInvoices();
  return (
    <main className={styles.container}>
      <div className={styles.invoices}>
        {invoices.map((invoice) => (
          <Link
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
            className={styles.invoice_link}
          >
            {invoice.name}
          </Link>
        ))}
      </div>

      <Outlet />
    </main>
  );
}
export default Invoices;
