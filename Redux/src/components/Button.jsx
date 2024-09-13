import React from 'react'
import { useDispatch } from 'react-redux'
import { addCounter, subCounter } from '../store/slices/counterSlices';

const Button = () => {
    const dispatch = useDispatch()

    const handleAction = ()=>{
       dispatch( addCounter());
    };
    const handleAction2 = ()=>{
        dispatch( subCounter());
     };
  return (
    <div style={{display:"flex" , justifyContent : "center",alignItems:"center"}}>
      <button style={{borderRadius:25,padding:10,margin:10,background:"rgb(114, 193, 234)"}} onClick={handleAction}> Increament </button>
      <button style={{borderRadius:25,padding:10,margin:10,background:"tomato"}} onClick={handleAction2}> Decrement </button>
    </div>
  )
}

export default Button
