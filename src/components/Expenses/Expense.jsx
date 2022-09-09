import React from 'react'
import ExpensiveItem from './Expensive';
import Card from '../UI/Card';
import './Expense.css';

const Expense = () => {
    const expense = [
        { 
          id: "e1",
          title: 'Buy Car',
          amount: 90000,
          date: new Date(2021, 5, 12)
        },
        { 
          id: "e2",
          title: 'Toilet Paper',
          amount: 100000,
          date: new Date(2020, 8, 15)
        },
        { 
          id: "e3",
          title: 'Car Insurance',
          amount: 190000,
          date: new Date(2019, 10, 20)
        },
        { 
          id: "e4",
          title: 'New Tv',
          amount: 50000,
          date: new Date(2015, 12, 29)
        }
      ];
  return (
    <Card className="expenses">
        <ExpensiveItem 
            title={expense[0].title} 
            amount={expense[0].amount} 
            date={expense[0].date} 
        />
        <ExpensiveItem 
            title={expense[2].title} 
            amount={expense[2].amount} 
            date={expense[2].date} 
        />
        <ExpensiveItem 
            title={expense[3].title} 
            amount={expense[3].amount} 
            date={expense[3].date} 
        />
        <ExpensiveItem 
            title={expense[1].title} 
            amount={expense[1].amount} 
            date={expense[1].date} 
        />
    </Card>
  )
}

export default Expense