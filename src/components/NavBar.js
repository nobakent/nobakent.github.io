import React from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styles = styled.div`
    .navbar{
        padding:1em 3em;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }
`;

function NavBar() {
    return (
        <Styles>
            <Navbar className="navbar">
                <Navbar.Brand as ={Link} to='/'>Nobak Entertainment</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/'>Games</Nav.Link>
                        <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        <Nav.Link as={Link} to='/contact'>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}
export default NavBar;