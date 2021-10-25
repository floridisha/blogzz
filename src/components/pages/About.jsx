import React from 'react'
import styled from 'styled-components'

const About = () => {
    return (
        <Container>
            <Left>
                <h1>BLOGZZ</h1>
            </Left>
            <Right>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis cum obcaecati praesentium iste, modi, fugiat vitae architecto aliquid quaerat sit nam ea ratione fuga quidem hic soluta! Similique harum, repudiandae, adipisci, ipsum neque fugit ut magnam modi aperiam vel unde nostrum obcaecati officia? Provident, ea. Itaque sequi minima exercitationem nemo odit aut optio. Dicta reprehenderit natus accusamus. Et pariatur incidunt consequuntur omnis dicta minima earum veritatis iure temporibus facere modi iusto tempore, esse voluptas optio eligendi eveniet, quidem consectetur magni, mollitia est ut? Nulla sit numquam, magni tenetur, vero ducimus nobis iure molestias id facilis tempore delectus qui, hic accusamus.</p>
            </Right>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
`

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: var(--colorTwo);
    color: var(--colorOne);
    font-size: 30px;
`

const Right = styled.div`
    padding: 20px 40px;
`



export default About
