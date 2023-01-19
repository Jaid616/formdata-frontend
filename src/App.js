import React from 'react'
import Form from './Form'
import { Routes, Route } from "react-router-dom";
import FormData from './FormData'
export default function App() {
  return (
    <>
   
      
 
  <Routes>
  <Route path = "/" element = {<Form/>}/>
        <Route path = "infomation" element = {<FormData/>}/>
        </Routes>




    </>
  )
}


