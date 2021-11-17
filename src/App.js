import './App.css';
import Expenses from '../src/Components/Expenses/Expenses';
import React, { useState } from 'react';
import NewExpense from './Components/NewExpense/NewExpense';

const DUMMY_EXPENSES  = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e6",
    title: "New Desk3",
    amount: 6.56,
    date: new Date(2019, 7, 12),
  },
];
function App() {
  const[expenses,setExpenses]=useState(DUMMY_EXPENSES );
  const addData=(expense)=>{
    setExpenses(prevExpense=> {
      return [expense,...prevExpense]
    });
  }
  return (
    // React.createElement('div',{className:"App"},React.createElement('h2',{},"Lets get Start"),React.createElement(Expenses,{}))
    <div className="App">
        <NewExpense addExpenseData={addData}/>
        
        <Expenses item={expenses}/>
    </div>
  );
}

export default App;
