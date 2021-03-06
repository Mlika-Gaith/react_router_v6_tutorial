let expenses = [
  {
    id: "EXP001",
    name: "car expenses",
    number: 1997,
    currency: "dollar",
    amount: "$19,580",
    date: "12/08/1997",
  },
  {
    id: "EXP002",
    name: "study expenses",
    number: 2000,
    currency: "dollar",
    amount: "$800,250",
    date: "30/06/2000",
  },
  {
    id: "EXP003",
    name: "travel expenses",
    number: 1981,
    currency: "dollar",
    amount: "$120,000",
    date: "04/03/1981",
  },
  {
    id: "EXP004",
    name: "shopping expenses",
    number: 1998,
    currency: "dollar",
    amount: "$75,750",
    date: "12/01/1998",
  },
  {
    id: "EXP005",
    name: "holiday expenses",
    number: 2005,
    currency: "dollar",
    amount: "$380,000",
    date: "05/07/2005",
  },
];
export function getExpenses() {
  return expenses;
}
export function getExpense(number) {
  return expenses.find((expense) => expense.number === number);
}
export function deleteExpense(number) {
  return (expenses = expenses.filter((expense) => expense.number !== number));
}
