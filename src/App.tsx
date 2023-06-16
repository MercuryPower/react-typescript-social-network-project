import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, {createGlobalStyle} from 'styled-components';
import Flex from './components/Flex';
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import Post, {PostProps} from "./components/Post";
import "./App.scss";
import CreateANewPost, {CreateANewPostProps} from "./components/CreateANewPost";
import PostList from "./components/PostList";
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

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

    const createPost = (newPost: any)  => { // пофиксить any type
        setPosts([...posts, newPost])
    }

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
                    <CreateANewPost create={createPost} />
                  <br/>
                    <PostList posts={posts}/>
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
