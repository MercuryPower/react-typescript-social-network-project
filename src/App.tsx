import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, {createGlobalStyle} from 'styled-components';
import Flex from './components/Flex';
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import Post from "./components/Post";
import "./App.scss";
import AddNewPost from "./components/AddNewPost";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
`

function App() {
    const [posts, setPosts] = useState([
        {id:1, title:'REACT', body:'Text'},
        {id:2, title:'JS', body:'Text2'},
        {id:3, title:'TYPESCRIPT', body:'TEXT3'},
    ]);
    return (
      <div>
      <AppWrapper>
          <div>
            <Navigation/>
          </div>
          <Flex justifyContent={'center'} >
              <div>
                  <Menu/>
              </div>
              <div>
                  <br/>
                  <AddNewPost/>
                  <br/>
                      <div>
                          {posts.map(post =>
                              <Post id={post.id} title={post.title}   />
                          )}
                      </div>
              </div>
              <div>
                  <Menu />
              </div>
          </Flex>
      </AppWrapper>
      </div>
  );
}

export default App;
