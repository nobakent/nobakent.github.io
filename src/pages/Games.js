import React from 'react'
import Hero from '../components/Hero';
import nolaImg from '../assets/nola-poster-2.jpeg';
import styled from 'styled-components';

const Styles = styled.div`
    .hero-div{
    }
`;

function Games() {
    return (
        <Styles>
            <div className="hero-div">
            <Hero image={nolaImg} imageAlt="nola-poster" title="Nola Swifty" description="How fast are you or how strong are your reflexes? Nola wants to get rid of the deadly enemies one by one and reach the diamonds. Can you help Nola?
Nola Swifty is an entertaining game that will take you away from everything with its great design and music. Even a race! Run your longest run in challenging endless stages!" />
            </div>
        </Styles>
    )
}

export default Games;