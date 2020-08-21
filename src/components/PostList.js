import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import postlist from '../posts.json'
import Markdown from 'react-markdown'

function PostList() {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ")
    })

    return (
            <div className="postlist">
                <Row>
                {postlist.length &&
                    postlist.map((post, i) => {
                        return (
                        <Col sm={12} md={4} lg={6}  key={i}>
                            <Link to={`/post/${post.id}`}>
                                <div key={i} className="post-card">
                                    <h2>{post.title}</h2>
                                    <small>Published on {post.date} by <strong>{post.author}</strong></small>
                                    <hr />
                                    <Markdown source={excerptList[i]} escapeHtml={false} />
                                    <small>Read More..</small>
                                </div>
                                </Link>
                                </Col>
                        )
                    })
                }
                </Row>
            </div>

    )
}

export default PostList;
