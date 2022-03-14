import { useParams } from "react-router-dom";
import { getInvoice } from "../../data/Data";
import styles from "./Invoice.module.css";
function Invoice() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <main className={styles.invoice_container}>
      <div className={styles.invoice_info}>
        <h2>Total due : {invoice.amount}</h2>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due date :{invoice.due}</p>
      </div>
    </main>
  );
}
export default Invoice;
