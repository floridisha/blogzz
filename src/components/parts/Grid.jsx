import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Grid = ({data}) => {
    return (
        <Container>
            <Image src={data.image} />
            <TextWrapper>
                <Title>{data.title}</Title>
                <Excerpt>{data.excerpt}</Excerpt>
                <Button to={`blog/${data.id}`}>View Blog</Button>
            </TextWrapper>
        </Container>
    )
}

const Container = styled.div`
    box-shadow: 2px 2px 10px 1px rgba(0,0,0,0.5);
    padding-bottom: 10px;
    transition: all .3s ease;

    &:hover {
        transform: scale(1.06);
    }
`

const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`

const TextWrapper = styled.div`
    padding: 10px 10px;
`

const Title = styled.h3`
    font-size: 18px;
    margin-bottom: 15px;
`

const Excerpt = styled.p`
    font-size: 14px;
    margin-bottom: 30px;
`

const Button = styled(Link)`
    text-decoration: none;
    padding: 5px 15px;
    border: 2px solid var(--colorTwo);
    color: var(--colorTwo);
    background-color: transparent;
    transition: all .3s ease;

    &:hover {
        border: 2px solid var(--colorTwo);
        color: var(--colorOne);
        background-color: var(--colorTwo);
    }

`

export default Grid
