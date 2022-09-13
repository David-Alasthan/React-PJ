
import React, {useState} from 'react';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY__EXPENSE = [
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

const App = () => {
  const [expense, SetExpense] = useState(DUMMY__EXPENSE );
  const addExpenseHandler = (expense) => {
    SetExpense((preventExpense) => {
      return [
        expense,
        ...expense
      ]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expense={expense} />
    </div>
  );
}

export default App;
