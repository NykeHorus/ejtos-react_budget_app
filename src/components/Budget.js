import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget} = useContext(AppContext);
    const { dispatch} = useContext(AppContext);
    
    const { expenses} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const changeBudget = (val)=>{
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
        
    if(val>20000){
        alert("Budget Value exceeding 20,000")
        return{
            val
        };
    }; 
    
    if(val<totalExpenses){
        alert("Budget is below spendings")
        return{
            
        };
    };
};

    return (
        <div className='alert alert-secondary'>Budget £{
            <input 
            type ='number'
            defaultValue= {budget}
            required='required'
            onChange= {event=> changeBudget(event.target.value)}>
            </input>}
        </div>
    );
};
export default Budget;
