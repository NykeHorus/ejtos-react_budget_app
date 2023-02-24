import React,{useContext} from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency=() =>{
    const { dispatch} = useContext(AppContext);

    const ChangeCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
}
    return(
        <div>
            <div class="p-3 mb-2 bg-success text-white rounded pill align-baseline" >Currency:{
            <select class="btn btn-success dropdown-toggle align-baseline border-0" name="currency" id="currency" onChange={event=>ChangeCurrency(event.target.value)}>
              <option class="list-group-item list-group-item-success" value="£">£ pound</option>
              <option class="list-group-item list-group-item-success" value="₹">₹ Ruppee</option>
              <option class="list-group-item list-group-item-success" value="€">€ Euro</option>
              <option class="list-group-item list-group-item-success" value="$">$ Dollar</option>
            </select>	
            }
            </div>
            </div>
    );
};
export default ChangeCurrency;