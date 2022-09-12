import React from 'react'

const ExpenseFilter = (props) => {
  const dropDownChangehandler = (event) => {
    // console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  }
  return (
    <div className="expenses-filter">
        <div className="expenses-filter__control">
            <label>Filter Year</label>
            <select value={props.selected} onChange={dropDownChangehandler} >
              <option value="2022" >2022</option>
              <option value="2020" >2020</option>
              <option value="2019" >2019</option>
              <option value="2021" >2021</option>
            </select>
        </div>
    </div>
  )
}

export default ExpenseFilter