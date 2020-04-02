import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const FeedbackContainer = styled.div`
        color:#151515;
        text-decoration:underline;
        text-align:center;
        padding:2em 0;
        a{
            color:#ffffff;
            text-decoration:none;
        }

        h3{
            font-weight:600;
        }
        button{
            background-color:#151515;
            margin-top:1em;
            border-radius:2em;
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