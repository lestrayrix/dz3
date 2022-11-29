
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddAction, ClearAll } from '../redux/actions';

export default function Idol() {
    const numbers = useSelector(state=>state.idolReducer.numbers)
    console.log(numbers);
    const dispatch = useDispatch()
    let [number,SetNumber]=useState()
    const handleNumber = (e)=>{
        SetNumber(+e.target.value)

    }

    const handleAdd =()=>{
        dispatch(AddAction(number))

    }

    const handleClear =()=>{
        dispatch(ClearAll())
    }





    return (
        <div>
            <input type="number" onChange={handleNumber} />
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleClear}>Clear</button>
            <ul>
                {numbers.map((item,id)=><li key={id}>{item}</li>)}
            </ul>
        </div>
    )
}
