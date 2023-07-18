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

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
`
function App() {
    const [posts, setPosts] = useState([
        {id:1, title:'REACT', body:'Text', remove:() => {}},
        {id:2, title:'JS', body:'Text2', remove:() => {}},
        {id:3, title:'TYPESCRIPT', body:'TEXT3', remove:() => {}},
    ]);

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchQueryChange = (newSearchQuery: string) => {
        setSearchQuery(newSearchQuery);
    };
    const sortedPosts = useMemo(() => {
        if(selectedSort){
            return [...posts].sort((a, b) => (a as any)[selectedSort].localeCompare((b as any)[selectedSort]))
        }
        return posts;
    }, [selectedSort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.body.includes(searchQuery))
    }, [searchQuery, sortedPosts])

    const createPost = (newPost: any)  => { // пофиксить any type
        setPosts([...posts, newPost])
    }
    const removePost = (post: PostProps) => {
        setPosts(posts.filter((p) => p.id !== post?.id))
    }

    const sortPosts = (sort:string) => {
        setSelectedSort(sort)
    }

    return (
      <div>
      <AppWrapper>
          <div>
            <Navigation onSearchQueryChange={handleSearchQueryChange}/>
          </div>
          <Flex justifyContent={'center'}>
              <div>
                  <Menu/>
              </div>
              <div>
                  <br/>
                    <CreateANewPost create={createPost} />
                    <Select value={selectedSort} onChange={sortPosts} defaultValue='Choose one'  options={[
                        {value:'title', title: 'name'},
                        {value:'body', title: 'description'},
                    ]}/>
                  <br/>
                  <div>
                      {posts.length !== 0
                          ?
                          <PostList remove={removePost} posts={sortedAndSearchedPosts}/>
                          :
                          <Flex justifyContent={'center'} padding={'15px'}>
                              <h2>There are no posts :(</h2>
                          </Flex>
                      }
                  </div>
              </div>
          </Flex>
      </AppWrapper>
      </div>
  );
}

export default App;
