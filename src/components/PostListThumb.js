import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import postlist from '../posts.json'
import Markdown from 'react-markdown'

function PostListThumb() {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 10).join(" ")
    })
    return (
        <div className="postlist row">
            {postlist.length &&
                postlist.slice(0, 3).map((post, i) => {
                    return (
                        <Col sm={12} md={4} lg={4} key={i}>
                            <Link to={`/post/${post.id}`}>
                            <div className="post-card" >
                                    <h2 className="post-title">{post.title}</h2>
                                    <Markdown className="post-desc" source={excerptList[i]} escapeHtml={false} />
                                    <small className="post-read">>Read More...</small>
                                    <hr />
                                    <small className="post-published"> {post.date}</small>
                            </div>
                            </Link>
                        </Col>

                    )
                })
            }
        </div>
    )
}

export default PostListThumb;
