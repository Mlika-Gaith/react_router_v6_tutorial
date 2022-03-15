import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../../data/invoices";
import Button from "../Button/Button";
import styles from "./Invoice.module.css";
function Invoice() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <div className={styles.invoice_container}>
      <div className={styles.invoice_info}>
        <h2>Total due : {invoice.amount}</h2>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due date :{invoice.due}</p>
        <div className={styles.btn_container}>
          <Button
            onClick={() => {
              deleteInvoice(invoice.number);
              navigate("/invoices" + location.search);
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default Invoice;
