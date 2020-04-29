import React from 'react'
import styled from 'styled-components';
import huseink from '../assets/husein_kantarci.jpg'
import hasank from '../assets/hasan_kamilcelebi.jpg'
import mertk from '../assets/mert_karatas.jpg'
import didem from '../assets/didem.jpg'
import emine from '../assets/emine.jpg'
import atakan from '../assets/atakan.jpg'
import { Row,CardColumns,Card,Button,Jumbotron,Container} from 'react-bootstrap'
const Styles = styled.div`
    overflow-x: hidden;
    background-color:#f7f7f7;
    .jumbotron{
        background-color:#f7f7f7;
    }
    .team{
        background-color:#262626;
        padding:1em;
    }
    .team > .title{
        font-weight:400;
        font-size:3em;
    }
    
    .title{
        text-align:center;
        font-weight:700;
        font-size:4em;
        margin-bottom:0.5em;
    }
    .desc{
        font-weight:200;
        font-size:1.5em;
        width:70%;
        margin:0 auto;
        padding:1em;
    }
    .card{
        text-align:center;
        padding:1em 0;
        margin-bottom:1em;
        background-color:#ffffff;
    }
    .card-img-top{
        width:150px;
        height:150px;
        border-radius:5em;
        margin:0 auto;
    }

    .card-columns{
        padding:2em 15em;
    }
    a{
        text-decoration:none;
        color:#f7f7f7;
    }

    @media only screen and (max-width: 992px) {
        .card-columns{
            padding:2em 0;
            width:90%;
            margin:0 auto;
            column-count: 2;
        }
        .card{
            margin-bottom:2em;
        }
        .team > .title{
            font-weight:400;
            font-size:2em;
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
            width:90%;
            margin:0 auto;
           
      }

    @media only screen and (max-width: 768px) {
        .team > .title{
            font-weight:400;
            font-size:2em;
        }
        
        .title{
            text-align:center;
            font-weight:700;
            font-size:2em;
            margin-bottom:0.5em;
        }
        .desc{
            font-weight:200;
            font-size:1.1em;
            width:90%;
            margin:0 auto;
            padding:1em;
        }
        .card-columns{
            column-count: 1;
            width:80%;
            margin:0 auto;
            justify-content:center;
        }
        .card{
            margin-bottom:2em;
        }
        
      }
`;

function About() {
    return (
        <Styles>
            <Jumbotron fluid>
            <Container>
                <h1 className="title">Who we are</h1>
                <hr/>
                <p className="desc">
                <strong>NOBAK</strong> is a team of six Computer Engineering students from <strong>Trakya University.</strong> We come from various parts of the world <strong>(Kosovo, Greece, Turkey).</strong> Our main location is in Edirne, Turkey. <strong>NOBAK</strong> works with determination for the future with the goal of rising and becoming a star in the game industry by creating the most enjoyable games.
                </p>
            </Container>
            </Jumbotron>
            <div className="team">
            <h2 className="title text-white ">MEET THE TEAM</h2>
            <Row>
                <CardColumns>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={atakan} />
                    <Card.Body>
                        <Card.Title>Atakan Karaçalı</Card.Title>
                        <Card.Text>
                        Project leader, Marketing Officer
                        </Card.Text>
                        <Button variant="dark"><a href='https://www.linkedin.com/in/atakan-kara%C3%A7al%C4%B1-618831170/' target="_blank">Contact</a></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={hasank} />
                    <Card.Body>
                        <Card.Title>Hasan Kamilçelebi</Card.Title>
                        <Card.Text>
                        Game Designer, Graphic Designer
                        </Card.Text>
                        <Button variant="dark"><a href='https://www.linkedin.com/in/hasan-kamil%C3%A7elebi-6083821a3/' target="_blank">Contact</a></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={huseink} />
                    <Card.Body>
                        <Card.Title>Hüsein Kantarci</Card.Title>
                        <Card.Text>
                            Lead Developer
                        </Card.Text>
                        <Button variant="dark"><a href='https://www.linkedin.com/in/h%C3%BCsein-kantarci-44861b1a2/' target="_blank">Contact</a></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={didem}/>
                    <Card.Body>
                        <Card.Title>Didem Çiçek Karaöz</Card.Title>
                        <Card.Text>
                            Developer
                        </Card.Text>
                        <Button variant="dark"><a href='https://www.linkedin.com/in/didem-%C3%A7i%C3%A7ek-kara%C3%B6z-132a56148/' target="_blank">Contact</a></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={mertk} />
                    <Card.Body>
                        <Card.Title>Mertcan Karataş</Card.Title>
                        <Card.Text>
                            Developer
                        </Card.Text>
                        <Button variant="dark"><a href='https://www.linkedin.com/in/mertcan-karata%C5%9F-a2a151195/' target="_blank">Contact</a></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={emine} />
                    <Card.Body>
                        <Card.Title>Emine Tsilgkir</Card.Title>
                        <Card.Text>
                        Graphic Designer
                        </Card.Text>
                        <Button variant="dark"><a href='https://www.linkedin.com/in/emine-tsiligkir-72b2251a3/' target="_blank">Contact</a></Button>
                    </Card.Body>
                </Card>
                </CardColumns>
            </Row>
            </div>
           
        </Styles>
    )
}

export default About;