import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onAddExpense = (expenseData) => {
    const expenseDataValue = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.addExpenseData(expenseDataValue);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
{isEditing && (
      <ExpenseForm onSaveExpense={onAddExpense} onCancel={stopEditingHandler} />
      )}
      </div>
  );
};

export default NewExpense;
