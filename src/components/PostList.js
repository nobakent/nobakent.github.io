import React from 'react'
import { Link } from 'react-router-dom'
import postlist from '../posts.json'
import Markdown from 'react-markdown'

function PostList() {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ")
    })

    console.log(excerptList)
    return (
        <div className="postlist">
            <h1 className="title">All Posts</h1>
            {postlist.length &&
                postlist.map((post, i) => {
                    return (
                        <div key={i} className="post-card">
                            <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
                            <small>Published on {post.date} by {post.author}</small>
                            <hr />
                            <Markdown source={excerptList[i]} escapeHtml={false} />
                            <small><Link to={`/post/${post.id}`}>Read More...</Link></small>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostList
