import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import FormData from './components/FormData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  

  return (
  
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={ <Form/> } />
    <Route exact path='/data' element={<FormData/>} />
  </Routes>
  
  </BrowserRouter>
 
   
  );
}