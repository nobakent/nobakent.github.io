import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const FeedbackContainer = styled.div`
        color:#151515;
        text-decoration:underline;
        text-align:center;
        padding:1em 0;
        a{
            color:#ffffff;
            text-decoration:none;
        }
        h3{
            font-weight:600;
        }
        button{
            background-color:#151515;
            margin-top:9px;
            border-radius:2em;
            transition: all 0.15s ease-in-out;
transform: translateZ(0);
backface-visibility: hidden;
        }
        button:hover{
            transform: scale(1.03);
        }
        @media only screen and (max-width: 992px) {
           h3{
               font-size:1.5em;
           }
            
          }
        
        `;

function Feedback() {
    return (
        <FeedbackContainer>
            <Container fluid>
                <Row>
                    <Col>
                        <h3>Want to leave feedback?</h3>
                        <Button size="lg" variant="dark"><Link to='/contact'>Contact Us</Link></Button>
                    </Col>
                </Row>
            </Container>
        </FeedbackContainer>
    )
}

export default Feedback;