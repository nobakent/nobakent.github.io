import React from 'react'
import {  Link, Redirect } from "react-router-dom"
import { Breadcrumb } from 'react-bootstrap'
import postlist from '../posts.json'
import Markdown from 'react-markdown'
import styled from 'styled-components'

const Styles = styled.div`
    margin-bottom:1em;
    background-color:#f7f7f7;
    .post{
        width: 50%;
        margin:auto;
        height:100vh;
        border:1px solid #dbdbdb;
        padding:1em 1em;
    }

    .post > h2{
        font-weight:600;
        font-size:3em;
    }
    .post > small{
        font-weight:600;
        color:#7f7f7f;
    }
    .desc{
        font-size:1em;
        font-weight:600;
    }

    .breadcrumb{
        background-color:#f7f7f7;
        text-align:center;
        margin:0;
    }
`;

function Post(props) {
    const validId = parseInt(props.match.params.id)
    if (!validId) {
        return <Redirect to="/404" />
    }

    const fetchedPost = {}
    let postExist = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.content = post.content ? post.content : "No content given"
            postExist = true
        }
    })
    if (postExist === false) {
        return <Redirect to="/404" />
    }
    console.log(fetchedPost)
    return (
        <Styles>
            
            <div className="post">
            <Breadcrumb>
                <Breadcrumb.Item><Link to ='/blog'>Blog</Link></Breadcrumb.Item>
                <Breadcrumb.Item active>{fetchedPost.title}</Breadcrumb.Item>
            </Breadcrumb>
                <h2>{fetchedPost.title}</h2>
                <small>Published on {fetchedPost.date} by {fetchedPost.author}</small>
                <hr />
                <Markdown className="desc" source={fetchedPost.content} escapeHtml={false} />
            </div>
        </Styles>
    )
}

export default Post