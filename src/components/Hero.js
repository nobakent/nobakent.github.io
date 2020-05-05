import React from 'react'
import { Jumbotron, Container ,Row, Col,Image} from 'react-bootstrap';
import styled from 'styled-components';
import bg from '../assets/bg.jpg'
import MobileStoreButton from 'react-mobile-store-button';


const Styles = styled.div`
    .jumbotron{
        background-color:white;
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-size: cover;
        height:100%;
        margin:0;
    }
    .jumbo-image{
        width:12em;
        margin-left:10em;
    }
    a{
        transition: all .2s ease-in-out;
    }
    a:hover{
        transform: scale(1);
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

    @media only screen and (max-width: 768px) {
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
            margin:0 auto;
        }
        a{
            width:80% !important;
            margin:0 auto;
        }
        
      }
    
`;

function Hero(props) {
    return (
        <Styles>
            <Jumbotron fluid>
                <Container className="jumbo-container align-content-center">
                    <Row>
                        <Col className="text-center">
                            <Image className="jumbo-image" src={props.image}/>
                        </Col>
                        <Col className="jumbo-text">
                            <h1 className="jumbo-title">{props.title}</h1>
                            <p className="jumbo-desc">{props.description}</p>
                            <MobileStoreButton className="store-button"
                                store={props.store}
                                url={props.storeUrl}
                                width={250}
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