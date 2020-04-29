import React from 'react'
import { Col, Row} from 'react-bootstrap'
import styled from 'styled-components'
import PostListThumb from '../components/PostListThumb'

const Styles = styled.div`
    background-color: #171717;
    font-family: 'Poppins', sans-serif;

    a{
        color:#e1e1e1;
    }
    .postlist{
        padding:2em 0;
        width:80%;
        margin: auto;
        text-align: center;
        align-self:center;
    }

    .post-card{
        text-align:left;
        font-size:1em;
        padding:1em;
        width:20em;
        border:1px solid #444444;
        transition: all 0.15s ease-in-out;
transform: translateZ(0);
backface-visibility: hidden;
    }
    .post-card:hover{
        transform: scale(1.01, 1.01);
    }

    .post-title{
        color:#e1e1e1;
        font-size:25px;
        overflow-wrap:break-word;
    }
    

    .post-desc{
        color:#9d9d9d;
        width:90%;
        font-size:15px;
        overflow-wrap:break-word;
    }

    .post-published{
        color:#9d9d9d;
    }
    .post-read{
        color:#9d9d9d;
    }

    hr{
        margin:0;
        color:#171717;
        background-color:#171717;
        border:none;
    }
    a{
        text-decoration:none;
    }

    @media only screen and (max-width: 992px) {
        .post-card{
            width:90%;
            margin:1em auto;
        }
        .post-card > h2{
            font-size:1em;
            text-decoration:none;
        }
        .post-desc{
            width:100%;
        }
      }
`;

function BlogThumb() {
    return (
        <Styles>
            <Row>
                <Col>
                    <PostListThumb />
                </Col>
            </Row>
        </Styles>
    )
}

export default BlogThumb;