import React, {useState} from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

const Header = () => {

    const [toggle, setToggle] = useState(false)

    const handleMobileMenu = () => {
        setToggle(!toggle)
    }


    return (
        <Container>
            <Wrapper>
                <Link to='/'>
                    <Logo src={logo} />
                </Link>
                <Nav>
                    <List>
                        <ListItem>
                            <ListItemLink to='/'>Home</ListItemLink>
                        </ListItem>
                        <ListItem>
                            <ListItemLink to='/about'>About</ListItemLink>
                        </ListItem>
                        <ListItem>
                            <ListItemLink to='/blogs'>Blogs</ListItemLink>
                        </ListItem>
                    </List>
                </Nav>
                <MobileNav>
                    <MobileToggler onClick={handleMobileMenu} toggle={toggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </MobileToggler>
                    <List toggle={toggle}>
                        <ListItem>
                            <ListItemLink to='/'>Home</ListItemLink>
                        </ListItem>
                        <ListItem>
                            <ListItemLink to='/about'>About</ListItemLink>
                        </ListItem>
                        <ListItem>
                            <ListItemLink to='/blogs'>Blogs</ListItemLink>
                        </ListItem>
                    </List>
                </MobileNav>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
  background-color: var(--colorThree);
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: 1px 1px 20px 3px rgba(0,0,0,0.7);
`

const Logo = styled.img`
    max-width: 120px;
    margin-bottom: 0px;
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`
const Wrapper = styled.div`
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const Nav = styled.nav`

    @media screen and (max-width: 768px) {
        display: none;
    }
    
`

const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;

    @media screen and (max-width: 767px) {
        width: 300px;
        height: 300px;
        position: absolute;
        background-color: var(--colorThree);
        right: -15px;
        top: -20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 5px;
        box-shadow: 1px 1px 20px 3px rgba(0,0,0,0.7);
        transform: ${props => (props.toggle ? 'scaleX(1) scaleY(1)' : 'scaleX(0) scaleY(0)')};
        visibility: ${props => (props.toggle ? 'visible' : 'hidden')};
        opacity: ${props => (props.toggle ? 1 : 0)};
        transition: all .3s ease;
        transform-origin: top right;
    }
`
const ListItem = styled.li`
    margin: 0 10px;
    padding: 10px 10px;
    cursor: pointer;
    position: relative;


    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 80%;
        margin: 0 auto;
        height: 3px;
        transform: scaleX(0);
        visibility: hidden;
        opacity: 0;
        transform-origin: left;
        transition: all .3s ease;
        background-color: var(--colorTwo);
    }

    &:hover a {
        color: var(--colorTwo);
    }

    &:hover::before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1;
    }

    @media screen and (max-width: 767px) {
       margin: 10px auto;
    }
`
const ListItemLink = styled(Link)`
    color: var(--colorOne);
    text-transform: uppercase;
    font-weight: 600;
    font-size: 90%;
    transition: all .3s ease;
    text-decoration: none;
`

const MobileNav = styled.nav`
    display: none;
    position: relative;
    z-index: 20;

    @media screen and (max-width: 767px) {
        display: block;


    }

`

const MobileToggler = styled.div`
    width: 30px;
    height: 100%;
    cursor: pointer;
    position: relative;
    z-index: 999;

    span:nth-child(1) {
        width: 100%;
        display: block;
        height: 3px;
        background-color: var(--colorOne);
        border-radius: 5px;
        transform-origin: center;
        transition: all .3s ease;
        transform: ${props => (props.toggle ? 'rotate(45deg) translateX(2px)' : 'rotate(0deg) translateX(0px)')};
    }

    span:nth-child(2) {
        width: 100%;
        margin: 5px 0;
        display: block;
        height: 3px;
        background-color: var(--colorOne);
        border-radius: 5px;
        transition: all .3s ease;
        display: ${props => (props.toggle ? 'none' : 'block')};
    }

    span:nth-child(3) {
        width: 100%;
        display: block;
        height: 3px;
        background-color: var(--colorOne);
        border-radius: 5px;
        transform-origin: center;
        transition: all .3s ease;
        transform: ${props => (props.toggle ? 'rotate(-45deg) translateX(2px)' : 'rotate(0deg) translateX(0px)')};
    }
`

export default Header
