import React from 'react'

import { ReactPhotoCollage } from "react-photo-collage";
import glowingNumbers from '../assets/upcoming/glowing-numbers.jpeg'
import comingSoon from '../assets/upcoming/coming-soon.jpg'
import styled from 'styled-components'


const Styles = styled.div`

`
const setting = {
    width: '70em',
    height: ['30em'],
    layout: [3],
    photos: [
      { src: glowingNumbers },
      { src: comingSoon },
      { src: comingSoon }
    ],
    showNumOfRemainingPhotos: false
  };

function Collage(){
    return (
        <Styles>
        <ReactPhotoCollage style={{border:'hidden'}} {...setting} />
        </Styles>
      );
}

export default Collage;