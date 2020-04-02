import React from 'react'
import { Jumbotron, Container ,Row, Col,Image} from 'react-bootstrap';
import styled from 'styled-components';
import bg from '../assets/bg.jpg'
import MobileStoreButton from 'react-mobile-store-button';


const Styles = styled.div`
    .jumbotron{
        background-color:white;
        background-image: url(${bg});
        height:100%;
        margin:0;
    }
    .jumbo-image{
        width:25em;
        margin-left:5em;
    }
    .jumbo-text{
        margin:auto 0;
       
    }
    .jumbo-title{
        font-weight:700;
        font-size:60px;
        margin-bottom: 0;
        color:#ffffff;
    }
    .jumbo-desc{
        color:#161616;
        font-weight:100;
        font-size:25px;
    }

    @media only screen and (max-width: 992px) {
        .jumbo-text{
            text-align:center;
            margin-top:1em;
            margin-bottom:0;
        }
        .jumbo-title{
            font-size:50px;
            margin-bottom: 15px;
        }
        .jumbo-desc{
            font-size:20px;
            margin-bottom:10px;
        }
        .jumbo-image{
            width:25em;
            margin-left:1em;
        }
      }
    
`;

function Hero(props) {
    return (
        <Styles>
            <Jumbotron fluid>
                <Container className="jumbo-container align-content-center">
                    <Row>
                        <Col>
                            <Image className="jumbo-image" src={props.image} rounded />
                        </Col>
                        <Col className="jumbo-text">
                            <h1 className="jumbo-title">{props.title}</h1>
                            <p className="jumbo-desc">{props.description}</p>
                            <MobileStoreButton className="store-button"
                                store={props.store}
                                url={props.storeUrl}
                                height={80}
                                linkProps={{ title: 'Link to App' }}
                                />
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </Styles>
    )
}

export default Hero;