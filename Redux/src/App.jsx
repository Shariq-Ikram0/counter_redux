import React from 'react'
import Header from './components/Header'
import Button from './components/Button'
import img from './assets/main.jpg'
import './App.css';  

const App = () => {
  return (
    <div     style={{
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#f5f5f9',
      border: '2px solid #ddd',
      borderRadius: '10px',
      padding: '30px',
      paddingBottom: '60px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      width: '29vw',
      margin: 'auto',
      marginTop: '100px',
    }}>
 
       
     <Header/>
      <Button/>
 
    </div>
  )
}

export default App
