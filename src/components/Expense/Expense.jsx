import { getExpense } from "../../data/expenses";
import { useParams } from "react-router-dom";
import styles from "./Expense.module.css";

function Expense() {
  let params = useParams();
  console.log(typeof params.expenseId);
  let expense = getExpense(parseInt(params.expenseId, 10));
  //let expenses = getExpenses();
  console.log(expense);
  //console.log(expense);
  return (
    <div className={styles.expense_container}>
      <h2> expense id :{expense.id}</h2>
      <p>expense name : {expense.name}</p>
      <p>expense number : {expense.number}</p>
      <p>expense currency : {expense.currency}</p>
      <p>expense amount : {expense.amount}</p>
      <p>due date : {expense.date}</p>
    </div>
  );
}
export default Expense;
