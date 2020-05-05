import React from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import nolaSwifty from '../assets/featured-games/nola-swifty.jpg'
import glowingNumbers from '../assets/featured-games/glowing-numbers.jpeg'
import styled from 'styled-components'

const Styles = styled.div`
    background-color:#f7f7f7;
   
    .container{
        padding:5em;
        padding-top:2em;
    }

    .card{
        float: none;
        display: block;
        margin: 0 auto;
        margin-bottom:1em;
        -webkit-box-shadow: -8px 11px 15px -7px rgba(0,0,0,0.4);
-moz-box-shadow: -8px 11px 15px -7px rgba(0,0,0,0.4);
box-shadow: -8px 11px 15px -7px rgba(0,0,0,0.4);
transition: all 0.15s ease-in-out;
transform: scale(1, 1);
transform: translateZ(0);
backface-visibility: hidden;
    }
    .card:hover{
        background-color:#e0e0e0!important;
        transform: translate(0,-3px);
    }
    .card-title{
        font-size:2em;
        margin-bottom:0;
    }
    .card-text{
        font-size:1.2em;
    }
    .year{
        position:absolute;
        right:10px;
        bottom:40px;
    }
    .title{
        font-size:2em;
        color:#173644;
        font-weight:200;
        margin-left:0.5em;
        margin-bottom:0.5em;
    }
    .badge{
        font-size:1em;
        font-weight:400;
        position:absolute;
        right:10px;
        top:10px;
        padding:8px;
    }
    a{
        text-decoration:none;
        color:#173644;

    }
    @media only screen and (max-width: 992px) {
        .container{
            padding:1em;
        }
    }    
    @media only screen and (max-width: 768px) {
        .container{
            padding:1em;
        }
    
    }
    
`;

function FeaturedGames() {
    return (
        <Styles>
            <Container>
            <Row className="title-row">
                    <h1 className="title">Featured Games</h1>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={12} md={6} lg={6} className="center-block">
                    <a href="https://play.google.com/store/apps/details?id=com.nobakent.nolaswifty&hl=en" target="_blank" rel="noopener noreferrer">
                        <Card className="bg-light">
                            <Card.Img  src={nolaSwifty} alt="Card image" />
                            <Badge variant="primary">Out Now</Badge>{' '}
                            <Card.Body>
                                <Card.Title >Nola Swifty</Card.Title>
                                <Card.Text>
                                    On Google Play
                                </Card.Text>
                                <Card.Text className="year">2020</Card.Text>
                                </Card.Body>
                        </Card>
                    </a>
                    </Col>
                    <Col sm={12} md={6} lg={6} className="center-block">
                    <Link to="#">
                        <Card className="bg-light">
                            <Card.Img  src={glowingNumbers} alt="Card image" />
                            <Card.Body>
                            <Badge variant="danger">Coming Soon</Badge>{' '}
                                <Card.Title >Glowing Numbers</Card.Title>
                                <Card.Text>
                                    Coming Soon
                                </Card.Text>
                                <Card.Text className="year">2020</Card.Text>
                                </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
           
        </Styles>
    )
}

export default FeaturedGames;