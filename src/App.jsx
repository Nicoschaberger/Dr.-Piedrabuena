import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Logo from './Component/Logo';
import NavBar from './Component/NavBar';
import Person from './Component/Person';
import Contact from './Component/Contact';
import Carousel from './Component/Carousel'


const App = () => {
  return (
    <BrowserRouter>
    <ChakraProvider>

      <NavBar/>

      <Routes>
      <Route path="/" element={<Logo/>}/>
      <Route path='/Person' element={<Person/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Carousel' element={<Carousel/>}/>
      
      

      </Routes>

      
    </ChakraProvider>
    </BrowserRouter>
  )
}

export default App

