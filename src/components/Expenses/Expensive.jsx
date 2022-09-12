import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
// import Card from '../UI/Card';
import './Expensive.css';

// function Expensive(props) {
//     const expenseDate = new Date(2022, 9, 8);
//     const expenseTitle = 'Buy New Car';
//     const expenAmount = 90000;

//   return (
//     <div className='expense-item'>
//         <div>{expenseDate.toISOString()}</div>
//         <div className='expense-item__description'>
//             <h2>{expenseTitle}</h2>
//             <div className='expense-item__price'>${expenAmount}</div>
//         </div>
//     </div>
//   )
// }

const Expensive = (props) => {

  return (
    <div className='expense-item'>
        <ExpenseDate date={props.date} /> 
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    </div>
  )
}

export default Expensive;