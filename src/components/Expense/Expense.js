import React from "react";
import { getExpense, deleteExpense } from "../../data/expenses";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Expense.module.css";
import Button from "../Button/Button";

function Expense() {
  let navigate = useNavigate();
  let params = useParams();
  let expense = getExpense(parseInt(params.expenseId, 10));
  return (
    <div className={styles.expense_container}>
      <p> expense id :{expense.id}</p>
      <p>expense name : {expense.name}</p>
      <p>expense number : {expense.number}</p>
      <p>expense currency : {expense.currency}</p>
      <p>expense amount : {expense.amount}</p>
      <p>due date : {expense.date}</p>
      <div className={styles.btn}>
        <Button
          onClick={() => {
            deleteExpense(expense.number);
            navigate("/expenses");
          }}
        />
      </div>
    </div>
  );
}
export default Expense;
