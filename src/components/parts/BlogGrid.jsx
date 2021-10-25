import React from 'react'
import styled from 'styled-components'
import Grid from './Grid'


const BlogGrid = ({DummyData}) => {


    return (
        <Container>
            <HeadingOne>Latest Blogs</HeadingOne>
            <GridContainer>
                {DummyData.slice(0,4).map((item) => (
                    <Grid key={item.id} data={item} />
                ))}
            </GridContainer>
        </Container>
    )
}

const Container = styled.div`
    margin: 100px auto;
    padding: 0 30px;
`

const HeadingOne = styled.h1`
    text-align: center;
    margin-bottom: 50px;
    text-transform: uppercase;
`


const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    place-items: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }

`



export default BlogGrid
