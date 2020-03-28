import React from 'react'
import { Redirect } from "react-router-dom"
import postlist from '../posts.json'
import Markdown from 'react-markdown'
import styled from 'styled-components'

const Styles = styled.div`
    .post{
        width: 40%;
        margin:auto;
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
                <h2>{fetchedPost.title}</h2>
                <small>Published on {fetchedPost.date} by {fetchedPost.author}</small>
                <hr />
                <Markdown source={fetchedPost.content} escapeHtml={false} />
            </div>
        </Styles>
    )
}

export default Post