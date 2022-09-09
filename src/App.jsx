
import React from 'react';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';


const App = () => {
  
  return (
    <div>
      <NewExpense />
      <Expense />
    </div>
  );
}

export default App;
