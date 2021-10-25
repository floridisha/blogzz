import React from 'react'
import styled from 'styled-components'

const SlideSingle = ({source}) => {
    return (
        <Container>
            <Image src={source} />
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    max-height: 100vh;
    height: 60vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        max-width: 400px;
        color: var(--colorOne);
        text-shadow: 1px 1px black;
    }
`

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 60vh;
    object-fit: cover;
    z-index: -1;
`


export default SlideSingle
