import {useState} from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = () => {
  const [clicked, setClicked] = useState(false)
  return (
    <NavContainer>
      <Logo>Navbar</Logo>
      <MenuIcon onClick={()=> setClicked(!clicked)}>
        <span />
        <span />
        <span />
      </MenuIcon>
      <Menu isClicked={clicked}>
        <Link href=""><MenuLink>Home</MenuLink></Link>
        <Link href=""><MenuLink>Shirts</MenuLink></Link>
        <Link href=""><MenuLink>Canvas</MenuLink></Link>
        <Link href=""><MenuLink>Cart</MenuLink></Link>
        <Link href=""><MenuLink>Login</MenuLink></Link>
      </Menu>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 2rem;
  background: black;
  // height: 40px;
`
const Logo = styled.a`
  padding: 1rem 0;
  color: #fff;
  // weight: 800;
  font-size: 1.5rem;
  cursor: pointer;
`
const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex

  }
`
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({isClicked}) =>(isClicked ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`
const MenuLink = styled.a`
  text-decoration: none;
  text-align:center;
  color: #fff;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    color: #7b7fda;
  }
`
export default Nav
