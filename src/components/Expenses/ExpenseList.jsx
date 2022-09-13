import React from 'react';
import ExpensiveItem from './Expensive';

import './ExpenseList.css';

const ExpenseList = (props) => {
  
    
    // let expenseContent = <p>No Found Item</p>;
    if(props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>No Found Item</h2>
    }
    // if(props.items.length > 0) {
    //         props.items.map((expense) => {
    //             return (
        
    //                 <ExpensiveItem 
    //                     key={expense.id}
    //                     title={expense.title} 
    //                     amount={expense.amount} 
    //                     date={expense.date} 
    //                 />
    //             )
    //         });
    //       }
    return (

        <ul className='expenses-list'>

            {props.items.map((i) => {
               return (
                   <ExpensiveItem 
                       key={i.id}
                       title={i.title} 
                       amount={i.amount} 
                       date={i.date} 
                   />
    
               );
                
            })}

        </ul>

    );
       

    
  
}

export default ExpenseList