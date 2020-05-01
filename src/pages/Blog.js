import React from 'react'
import styled from 'styled-components'
import PostList from '../components/PostList'

const Styles = styled.div`
    overflow-x:hidden;
    background-color:#f7f7f7;
    .postlist{
        padding:5em 7em;
        text-align: center;
    }
    img{
        display:none;
    }
    .post-card{
        background-color:#009688;
        color:#eeeeee;
        text-align:left;
        font-family: 'Poppins', sans-serif;
        border:1px solid #009688;
        border-radius:1em;
        margin-bottom:20px;
        padding:2em;
        -webkit-box-shadow: -8px 11px 15px -7px rgba(0,0,0,0.4);
-moz-box-shadow: -8px 11px 15px -7px rgba(0,0,0,0.4);
box-shadow: -8px 11px 15px -7px rgba(0,0,0,0.4);
transition: all 0.15s ease-in-out;
transform: scale(1, 1);
transform: translateZ(0);
backface-visibility: hidden;
}
    .post-card:hover{
        transform: scale(1.01, 1.01);
    }
    .post-card:hover::after {
        opacity: 1;
      }
    a{
        text-decoration:none;
        color:#eeeeee;
    }

    @media only screen and (max-width: 992px) {
        .postlist{
            padding:1em;
            text-align: center;
        }
      }

    @media only screen and (max-width: 768px) {
        .postlist{
            padding:2em;
            text-align: center;
        }
        
        .post-card > h2{
            font-size:1.5em;
        }
        .post-desc{
            width:100%;
        }
      }
`;

function Blog() {
    return (
        <Styles>
                    <PostList />
        </Styles>
    )
}

export default Blog;