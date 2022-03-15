import React from "react";
import styles from "./Expense.module.css";
export default function Blank() {
  return (
    <div className={styles.expense_container}>
      <p>select an expense to see details</p>
    </div>
  );
}
