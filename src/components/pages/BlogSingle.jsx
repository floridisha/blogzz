import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const BlogSingle = ({DummyData}) => {
    const data = DummyData
    const {id} = useParams()
    

    const {title, body, image} = data[id - 1]

    return (
        <Container>
            <HeaderShowcase bg={image}>
                <Title>{title}</Title>
            </HeaderShowcase>
            <Body>{body}</Body>
        </Container>
    )
}

const Container = styled.div``

const HeaderShowcase = styled.div`
    background: url(${props => props.bg}) center center/cover no-repeat;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: var(--colorOne);
    text-align: center;
    text-transform: uppercase;
    text-shadow: 4px 4px 15px rgba(0,0,0,0.7);
    font-size: 60px;
`

const Body = styled.p`
    padding: 20px 50px;
    margin-top: 30px;
    text-align: center;
`

export default BlogSingle
