import React from 'react'
import {Container} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    background-color:#f7f7f7;
    .container{
        height:50vh;
        display:flex;
    }
    h1{
        align-self:center;
        margin:0 auto;
        width:70%;
    }
        
    `;

function FeaturedGames() {
    return (
        <Styles>
            <Container className="text-center">
                <h1 >Coming Soon</h1>                
                </Container>
        </Styles>
    )
}

export default FeaturedGames;