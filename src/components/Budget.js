import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {state,budget} = useContext(AppContext);
    const {remaining}=useContext(AppContext);
    const { dispatch} = useContext(AppContext);
    
    if(budget>20000){
        alert("Budget Value exceeding 20,000")
        return{
           ...state
        };
    }; 
    
    if(remaining===0){
        alert("Budget is below spendings")
        return{
            ...state
        };
    };
    const changeBudget = (val)=>{
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        });
    }
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
