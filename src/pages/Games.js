import React from 'react'
import nolaImg from '../assets/nola-1.png';
import styled from 'styled-components';
import Hero from '../components/Hero'
import BlogPreview from '../components/BlogThumb'
import Feedback from '../components/Feedback'

const Styles = styled.div`
  
`;

function Games() {
    return (
        <Styles>
            <div>
                <Hero image={nolaImg} 
                      title="Nola Swifty."
                      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis pariatur ut qui animi quaerat consequatur."
                      store="android"
                      storeUrl="https://play.google.com/store/apps/details?id=com.nobakent.nolaswifty&hl=en"/>
                <BlogPreview />
                <Feedback/>
            </div>
        </Styles>
    )
}

export default Games;