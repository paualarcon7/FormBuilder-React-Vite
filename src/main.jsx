import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {ChakraProvider} from '@chakra-ui/react'


ReactDOM.render(
  <ChakraProvider>

    <React.StrictMode>
    <App bgImage="url('https://res.cloudinary.com/djobvomhs/image/upload/v1680190694/FormBuilder/fondoflores_hus9us.jpg')" minHeight="100vh"/>
    
  </React.StrictMode>
  </ChakraProvider>
  ,
  document.getElementById('root')
)
