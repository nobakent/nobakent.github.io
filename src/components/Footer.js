import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const FooterContainer = styled.footer`
        color:#ffffff;
        font-family: 'Poppins', serif;
        background-color:#171717;

        .copyright{
            font-size:15px;
            font-weight:600;
        }
        .created-by{
            font-weight:400;
        }
        .husein-k:hover{
            color:#E13C4B;
        }
        .heart{
            color:#E13C4B;
        }
        .col{
            padding:1em 1em 0 1em;
        }
        .copy{
            text-align:center;
        }
        .social{
            text-align:center;
        }
        .social p{
            font-size:15px;
        }

        .social-link{
            font-size:17px;
            margin-right:10px;

        }
        .social-link:hover{
            font-size:18px;
            color:#d1d1d1;
        }
       
        a{
            text-decoration:none;
            color:#ffffff;
        }
`;

function Footer() {
    return (
        <FooterContainer>
            <Container fluid>
                <Row>
                    <Col xs={12} md={2} className="col social">
                            <p className="stay-connected">Stay Connected</p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/NobakEntertainment/" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-link" /></a>
                                <a href="https://twitter.com/nobakent" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-link" /></a>
                                <a href="https://www.instagram.com/nobakent/" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-link" /></a>
                            </div>
                    </Col>
                    <Col md={8} className="col copy">
                            <p>&copy; NOBAK ENTERTAINMENT, ALL RIGHTS RESERVED {new Date().getFullYear()}</p>
                            <p className="created-by">&lt; &#47; &gt; with <span className="heart">&#10084;</span> By <a className="husein-k" href="https://www.huseink.tech" target="_blank" rel="noopener noreferrer">Husein Kantarci</a></p>
                    </Col>
                </Row>
            </Container>
        </FooterContainer>
    )
}

export default Footer;