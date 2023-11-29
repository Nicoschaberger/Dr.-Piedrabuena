import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    <>
    <Box p='6'>  
      <Flex>
    <Box />
    <Link to={"/"}>
      <img className="animate__backInLeft" src="../Img/Dentista.png" alt="logo" />
    </Link>
    <Spacer />
    <Box  p='1'/>
    <Menu>
      
    </Menu>  
    <Spacer />
    <Box/>
      <CartWidget/>
  </Flex>
    </Box>
  </>
   )
}

export default NavBar