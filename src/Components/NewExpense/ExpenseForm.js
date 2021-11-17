import { Fragment, useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props){
    // const [enteredTitle,setEnteredTitle] = useState('');
    // const [enteredPrice,setEnteredPrice] = useState('');
    // const [enteredDate,setEnteredDate] = useState('');

    const [userInput,setUserInput] = useState({
        enteredTitle :'',
        enteredAmount:'',
        enteredDate:''
    })

    const titleHandler = (event)=>{
        
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        setUserInput((preveSate)=>{
            return{...preveSate , enteredTitle:event.target.value}
        })
    }

    const priceHandler = (event) =>{
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        })
    }

    const dateHandler = (event)=>{
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        })
    }

    const submitHandler =(event)=>{
        event.preventDefault();

        const formData = {
            title:userInput.enteredTitle,
            amount:userInput.enteredAmount,
            date:new Date(userInput.enteredDate)
        }

        props.onSaveExpense(formData)
    
        setUserInput({
            enteredTitle:'',
            enteredAmount:'',
            enteredDate:''
        })
        
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={userInput.enteredTitle} onChange={titleHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Price</label>
                <input type="number" value={userInput.enteredAmount}  min="0.01" step="0.01" onChange={priceHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={userInput.enteredDate} min="2019-01-01" max="2022-12-30" onChange={dateHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type='submit'> Add Expence </button>
        </div>
        </form>
    )
}
export default ExpenseForm;