import React from "react";
import styles from "./Invoice.module.css";
function InvoiceBlank() {
  return (
    <main className={styles.invoice_container}>
      <div className={styles.invoice_info}>
        <p>Select an invoice to see details</p>
      </div>
    </main>
  );
}
export default InvoiceBlank;
