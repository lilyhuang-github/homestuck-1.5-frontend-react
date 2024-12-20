import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Header from './components/header'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <Header bg="light" expand="lg"/>
    TEsT
    
    </>
  )
}

export default App
