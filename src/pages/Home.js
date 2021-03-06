import React from 'react'
import nolaImg from '../assets/nola-1.png';
import styled from 'styled-components';
import Hero from '../components/Hero'
import BlogPreview from '../components/BlogThumb'
import Feedback from '../components/Feedback'

const Styles = styled.div`
    overflow-x: hidden;
`;

function Home() {
    return (
        <Styles>
            <div>
                <Hero image={nolaImg} 
                      title="Nola Swifty."
                      description="How fast are you or how strong are your reflexes? Nola wants to get rid of the deadly enemies one by one and reach her home. Can you help Nola?"
                      store="android"
                      storeUrl="https://play.google.com/store/apps/details?id=com.nobakent.nolaswifty&hl=en"/>
                <BlogPreview />
                <Feedback />
            </div>
        </Styles>
    )
}

export default Home;
