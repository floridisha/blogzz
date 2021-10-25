import styled from "styled-components";
import Header from "./components/parts/Header";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Showcase from "./components/parts/Showcase";
import BlogGrid from "./components/parts/BlogGrid";
import BlogSingle from "./components/pages/BlogSingle";
import {Route, Switch} from 'react-router-dom'
import DummyData from './components/parts/dummydata.json'
import Blogs from "./components/pages/Blogs";
import About from "./components/pages/About";

function App() {
  return (
    <Container>
        <Header />
          <Switch>
            <Route path='/' exact>      
              <Showcase />
              <BlogGrid DummyData={DummyData} />
            </Route>
            <Route path='/blog/:id'>      
              <BlogSingle DummyData={DummyData} />
            </Route>
            <Route path='/blogs'>      
              <Blogs />
            </Route>
            <Route path='/about'>      
              <About />
            </Route>
          </Switch>
    </Container>
  );
}


const Container = styled.div`

`



export default App;


