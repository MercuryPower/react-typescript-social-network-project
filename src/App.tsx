import React, {useMemo, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, {createGlobalStyle} from 'styled-components';
import Flex from './components/Flex';
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import Post, {PostProps} from "./components/Post";
import "./App.scss";
import CreateANewPost from "./components/CreateANewPost";
import PostList from "./components/PostList";
import Select from "./UI/Select/Select";
import PostFilter from "./components/PostFilter";
import {usePosts, useSortedPosts} from "./hooks/usePosts";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
`
const MenuWrapper = styled.div`
  max-height: 300px;
  padding: 20px;
`
const initialPosts: PostProps[] = [];

function App() {
    const [posts, setPosts] = useState(initialPosts);
    const [filter, setFilter] = useState({sort:''});
    const [searchQuery, setSearchQuery] = useState('');
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, searchQuery);

    const handleSearchQueryChange = (newSearchQuery: string) => {
        setSearchQuery(newSearchQuery);
    };



    const createPost = (newPost: PostProps)  => {
        setPosts([...posts, newPost])
    }
    const removePost = (post: PostProps) => {
        setPosts(posts.filter((p) => p.id !== post?.id))
    }


    return (
      <AppWrapper>
          <div>
            <Navigation onSearchQueryChange={handleSearchQueryChange}/>
          </div>
          <div>
              <Flex justifyContent={'center'}>
                  <MenuWrapper>
                      <Menu/>
                  </MenuWrapper>
                  <div>
                      <br/>
                      <div>
                          <CreateANewPost create={createPost} />
                          <PostFilter filter={filter} setFilter={setFilter} />
                          <PostList remove={removePost} posts={sortedAndSearchedPosts}/>
                      </div>
                  </div>
              </Flex>
          </div>
      </AppWrapper>
  );
}

export default App;
