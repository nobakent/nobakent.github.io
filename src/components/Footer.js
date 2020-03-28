import React from 'react'
import styled from 'styled-components';


const Styles = styled.div`
    .footer{
        font-family: 'Merriweather', serif;
        text-align:center;
    }
`;

function Footer() {
    return (
        <Styles>
            <div className="footer">
                <hr/>
                <p>&copy; NOBAK ENTERTAINMENT, INC. ALL RIGHTS RESERVED. {new Date().getFullYear()}</p>
            </div>
        </Styles>
    )
}

export default Footer;