import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import postlist from '../posts.json'
import Markdown from 'react-markdown'

function PostListThumb() {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ")
    })
    return (
        <div className="postlist row">
            {postlist.length &&
                postlist.slice(0, 3).map((post, i) => {
                    return (
                        <Col sm={12} md={4} lg={4} key={i}>
                            <div className="post-card" as ={Link} to='/'>
                                    <h2 className="post-title"><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
                                    <Markdown className="post-desc" source={excerptList[i]} escapeHtml={false} />
                                    <small className="post-read"><Link to={`/post/${post.id}`}>Read More...</Link></small>
                                    <hr />
                                    <small className="post-published"> {post.date}</small>
                            </div>
                        </Col>
                    )
                })
            }
        </div>
    )
}

export default PostListThumb;
