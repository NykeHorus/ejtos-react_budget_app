import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Code to import the other components here under
import Remaining from './components/Remaining'
import ExpenseList from './components/ExpenseList'
import ExpenseTotal from './components/ExpenseTotal'
import AllocationForm from './components/AllocationForm'

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                    {/*Budget component here under */} 
                    <div className='col-sm'>
                        <Budget />
                    </div>       

                    {/*Remaining component here under */}        
                    <div className='col-sm'>
                        <Remaining />
                    </div> 

                    {/*ExpenseTotal component here under */} 
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>       
                    
                    {/*ExpenseItem component here under */}
                    <h3>Allocation</h3>
                    <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                    </div>        

                     {/* AllocationForm component here under */}
                    <h3>Change Allocation</h3> 
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>       

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
