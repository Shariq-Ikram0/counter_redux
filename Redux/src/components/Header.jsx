import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const {counter} = useSelector((state)=>state.counterReducer)
    console.log("counter",counter)
  return (
    <div style={{display:"flex" , justifyContent : "center",alignItems:"center" ,marginTop:"10px", color:'white' }}>
      <h1>Counter:{counter}</h1>
    </div>
  )
}

export default Header
