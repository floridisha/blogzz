import React from 'react'
import SliderHome from './SliderHome'
import styled from 'styled-components'

const Showcase = () => {
    return (
        <Container>
            <SliderHome />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    max-height: 100%;
    height: 60vh;
    position: relative;
`


export default Showcase
