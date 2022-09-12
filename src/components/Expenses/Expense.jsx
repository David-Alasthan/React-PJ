import React, { useState } from 'react'
import ExpensiveItem from './Expensive';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expense.css';

const Expense = (props) => {
    // const expense = [
    //     { 
    //       id: "e1",
    //       title: 'Buy Car',
    //       amount: 90000,
    //       date: new Date(2021, 5, 12)
    //     },
    //     { 
    //       id: "e2",
    //       title: 'Toilet Paper',
    //       amount: 100000,
    //       date: new Date(2020, 8, 15)
    //     },
    //     { 
    //       id: "e3",
    //       title: 'Car Insurance',
    //       amount: 190000,
    //       date: new Date(2019, 10, 20)
    //     },
    //     { 
    //       id: "e4",
    //       title: 'New Tv',
    //       amount: 50000,
    //       date: new Date(2015, 12, 29)
    //     }
    //   ];

    props.expense.map(() => {

    });

  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <div className="expenses">
        <ExpenseFilter 
            selected={filterYear} 
            onChangeFilter={filterChangeHandler} 
        />
        {props.expense.map((expense) => {
            return (

                <ExpensiveItem 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} 
                />
            )
        })};
        {/* <ExpensiveItem 
            title={props.expense[0].title} 
            amount={props.expense[0].amount} 
            date={props.expense[0].date} 
        />
        <ExpensiveItem 
            title={props.expense[2].title} 
            amount={props.expense[2].amount} 
            date={props.expense[2].date} 
        />
        <ExpensiveItem 
            title={props.expense[3].title} 
            amount={props.expense[3].amount} 
            date={props.expense[3].date} 
        />
        <ExpensiveItem 
            title={props.expense[1].title} 
            amount={props.expense[1].amount} 
            date={props.expense[1].date} 
        /> */}
    </div>
  )
}

export default Expense