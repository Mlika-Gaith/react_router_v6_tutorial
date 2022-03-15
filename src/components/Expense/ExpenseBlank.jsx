import styles from "./Expense.module.css";
export default function Blank() {
  return (
    <div className={styles.expense_container}>
      <h2>select an expense to see details</h2>
    </div>
  );
}
