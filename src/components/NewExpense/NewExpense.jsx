import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

const NewExpense = (props) => {
  const saveExpense = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData);
  }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpense={saveExpense} />
    </div>
  )
}

export default NewExpense;
