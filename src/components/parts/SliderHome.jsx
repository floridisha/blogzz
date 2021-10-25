import React from 'react'
import Slider from 'react-slick'
import SlideSingle from './SlideSingle'
import styled from 'styled-components'

const SliderHome = () => {  
    const source = 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036_1280.jpg'

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <Container>
            <Slider {...settings}>
                <SlideSingle source={source} />
                <SlideSingle source={source} />
                <SlideSingle source={source} />
                <SlideSingle source={source} />
            </Slider>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    max-height: 100%;
    height: 60vh;
    position: relative;
`


export default SliderHome
