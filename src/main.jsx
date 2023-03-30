import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundImage: "url('https://res.cloudinary.com/djobvomhs/image/upload/v1680190694/FormBuilder/fondoflores_hus9us.jpg')",
      },
    },
  },
});


ReactDOM.render(
  <ChakraProvider theme={theme}>

    <React.StrictMode>
    <App />
    
  </React.StrictMode>
  </ChakraProvider>
  ,
  document.getElementById('root')
)
