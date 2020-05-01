import React from 'react'
import {Row,Col,Card} from 'react-bootstrap'
import styled from 'styled-components'
import glowingNumbers from '../assets/upcoming/glowing-numbers.jpeg'
import comingSoon from '../assets/upcoming/coming-soon.jpg'

const Styles = styled.div`
    background: #111111;  

    padding:3em 0;
    img{
        margin:0 auto;
        width:15em;
    }
    
    .card{
        margin-top:2em;
        padding:1em;
        width:100%;
        border:none;
        background-color:transparent;
        color:#ffffff;
        transition: all .2s ease-in-out;
    }
    
    .coming-soon{
        filter:blur(1px);
    }
  
    .card-container{
        margin:0 auto;
    }
    .title{
       margin:0 auto;
        color:#ffffff;
        font-weight:700;
        font-size:3em;
    }
    .card-row{
        padding:1em;
        padding:0 17em;
    }
    .card-title{
        font-size:1.5em;
        font-weight:700;
        color:#ffffff;
        margin-top:1em;
    }
    .col{
        margin:0 auto;
    }
    @media only screen and (max-width: 992px) {
         img{
             width:13em;
         }
         .card-row{
            padding:0 1em;
        }

    }
  

    @media only screen and (max-width: 768px) {
    padding:2em 0;

        .title{
            margin:0 auto;
             color:#ffffff;
             font-weight:700;
             font-size:2em;
         }

         img{
             width:12em;
         }
         .card-row{
            padding:0 1em;
        }

    }
  
    `;

function Upcoming() {
    return (
        <Styles>
            <Row className="title-row">
                <h1 className="title">Upcoming Games</h1>
            </Row>
            <Row className="card-row">
                <Col sm={4} md={4} lg={4}>
                <Card className="text-center justify-content-center">
                    <Card.Img variant="top" src={glowingNumbers} />
                    <Card.Title>Glowing Numbers</Card.Title>
                </Card>
                </Col>
                <Col sm={4} md={4} lg={4}>
                <Card className="text-center justify-content-center">
                    <Card.Img className="coming-soon" variant="top" src={comingSoon} />
                    <Card.Title>Coming Soon</Card.Title>
                </Card>
                </Col>
                <Col sm={4} md={4} lg={4}>
                <Card className="text-center justify-content-center">
                    <Card.Img className="coming-soon"variant="top" src={comingSoon} />
                    <Card.Title>Coming Soon</Card.Title>
                </Card>
                </Col>
            </Row>

        </Styles>
    )
}

export default Upcoming;