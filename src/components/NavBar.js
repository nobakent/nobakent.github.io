import React from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styles = styled.div`
    .navbar{
        padding:1em 2em;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        background-color: #171717;
    }
    
    .navbar-brand{
        margin-right:10px;
        border-right:1px solid #818181;
        padding-right:15px;
    }

    .nav-link{
        margin-right:5px;
        font-weight:400;
    }
`;

function NavBar() {
    return (
        <Styles>
            <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
                <Navbar.Brand as ={Link} to='/'>Nobak Entertainment</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="nav=links"as={Link} to='/'>Games</Nav.Link>
                        <Nav.Link className="nav=links" as={Link} to='/blog'>Blog</Nav.Link>
                        <Nav.Link className="nav=links"as={Link} to='/about'>About</Nav.Link>
                        <Nav.Link className="nav=links"as={Link} to='/contact'>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}
export default NavBar;