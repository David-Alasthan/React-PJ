
import React from 'react';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';


const App = () => {
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
  const addExpenseHandler = (expense) => {
    console.log("Hello I am ///");
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expense={expense} />
    </div>
  );
}

export default App;
