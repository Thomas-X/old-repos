import React from 'react';
import NotFoundImage from './images/404.jpeg';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    height: 100vh;
    flex-direction:column;
    
`;

const NotFound = (props) => (
    <NotFoundContainer>
        <img src={NotFoundImage}/>
        <h1>404 not found :(.</h1>
    </NotFoundContainer>
);

export default NotFound;