import Card from "../../UI/Card";
import ExpenseDate from "./ExpenseDate";
import React, { Component, useState } from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const DateItem = props.date;

  const AmountItem = props.amount;
  const TitleItem = props.title;

  // const [TitleItem, setTitleItem] = useState(props.title);
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={DateItem} />
        <div className="expense-item__description">
          <h2>{TitleItem}</h2>
          <div className="expense-item__price">${AmountItem}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
