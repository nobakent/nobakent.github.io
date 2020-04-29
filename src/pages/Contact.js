import React, { useState } from 'react'
import styled from 'styled-components';
import { Form, Container, Jumbotron, Toast, Row, Col, Button } from 'react-bootstrap'
import emailjs from 'emailjs-com'
// import {toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const Styles = styled.div`
    overflow-x: hidden;
    background-color:#f7f7f7;
    .jumbotron{
        background-color:#f7f7f7;
        margin-bottom:0;
    }
    .title{
        text-align:center;
        font-weight:700;
        font-size:3em;
        margin-bottom:0.5em;
    }
    .desc{
        font-weight:200;
        font-size:1.5em;
        width:70%;
        margin:0 auto;
        padding:1em;
        padding-bottom:0;
    }

    form{
        padding:0 15em 5em 15em;
        margin-top:0;
    }

    #from_email{
        margin-bottom:1em;
    }
    #from_name{
        margin-bottom:1em;
    }
    #message_html{
        width:95%;
        height:10em;
        margin:0 auto 2em auto;
    }
    button{
        text-align:center;
        font-size:1.2em;
        width:10em;
        margin:0 auto;
    }

    @media only screen and (max-width: 992px) {
        .title{
            text-align:center;
            font-weight:700;
            font-size:3em;
            margin-bottom:0.5em;
        }
        .desc{
            font-weight:200;
            font-size:1.5em;
            width:90%;
            margin:0 auto;
      }

    @media only screen and (max-width: 768px) {
        form{
            padding:0 1em 1em 2em;
            margin-top:0;
        }
        #message_html{
            width:90%;
            height:10em;
            margin:0 auto 2em auto;
        }
        .title{
            text-align:center;
            font-weight:700;
            font-size:2em;
            margin-bottom:0.5em;
        }
        .desc{
            font-weight:400;
            font-size:1.2em;
            width:95%;
            margin:0 auto;
            padding:1em;
        }
        .toast{
            width:50%;
            bottom:0;
        }
        
      }
`;

function Contact() {
    const [show, setShow] = useState(false);
    // const toggleShow = () => setShow(!show);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('default_service', 'template_BnOa6O0t', e.target, 'user_Afm6qHxI8TFhk1joMm4II')
            .then((result) => {
                console.log(result.text);
                setShow(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <Styles>
            <Container>
                <Jumbotron>
                    <Container>
                        <h1 className="title">Contact Us</h1>
                        <hr />
                        <p className="desc">
                            Lets connect! We would love to get feedback, hear about your project ideas or thoughts what we might build together!
                    </p>
                    </Container>
                </Jumbotron>

                <Form className="contact-form" onSubmit={sendEmail}>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <Form.Control placeholder="Name" type="text" name="from_name" id="from_name" /></Col>
                        <Col sm={12} md={6} lg={6}>
                            <Form.Control placeholder="Email" type="email" name="from_email" id="from_email" /></Col>
                    </Row>
                    <Row>

                        <Form.Control placeholder="Message" as="textarea" name="message_html" id="message_html" />
                    </Row>
                    <Row>
                        <Button variant="dark" type="submit" >Send</Button>
                    </Row>
                </Form>
                <Toast show={show} delay={3000} autohide onClose={() => setShow(false)}
                    style={{
                        position: 'absolute',
                        bottom: 60,
                        right: 0,
                        backgroundColor: '#171717',
                        color: '#f7f7f7'
                    }} >

                    <Toast.Body
                        style={{
                            backgroundColor: '#01C851',
                            color: '#f7f7f7',
                            fontSize: '1.2em',
                            fontWeight: 400
                        }}>Thanks for contacting us. Email sent succesfuly!</Toast.Body>
                </Toast>
            </Container>
        </Styles>
    )
}

export default Contact;