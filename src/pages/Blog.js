import React from 'react'
import { Row,Col } from 'react-bootstrap'
import styled from 'styled-components'
import PostList from '../components/PostList'

const Styles = styled.div`
    .postlist{
        padding-top:3em;
        width: 40%;
        margin: auto;
        text-align: center;
    }
    .title{
        margin-bottom: 20px;
        font-size:2em;
    }

    .post-card{
        text-align:left;
        font-family: 'Poppins', sans-serif;
        border:1px solid lightblue;
        margin-bottom:20px;
        padding:1em;
    }
`;

function Blog() {
    return (
        <Styles>
            <Row>
                <Col>
                    <PostList />
                </Col>
            </Row>
        </Styles>
    )
}

export default Blog;