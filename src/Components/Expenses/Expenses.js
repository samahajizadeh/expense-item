import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../Expenses/ExpenseFilter";
import Card from "../../UI/Card";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filterYeared, setFilterYeared] = useState('2020');
  

  function filterChangeHandler(selectedYear) {
    setFilterYeared(selectedYear);
  }


  

  const filterExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYeared;
  });
  
  

 
  
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYeared}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expense={filterExpense}/>
      <ExpenseList  item={filterExpense}/>
    </Card>
  );
}
export default Expenses;
