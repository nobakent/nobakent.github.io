import React from 'react'
import { Jumbotron, Container ,Row, Col,Image} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .jumbotron{
        height:100vh;
        background-color:white;
    }
    .jumbo-image{
        width:25em;
        margin-left:5em;
    }
    .jumbo-text{
        margin:auto 0;
    }
    .jumbo-title{
        text-decoration:underline;
        margin-bottom: 1em;
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
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </Styles>
    )
}

export default Hero;