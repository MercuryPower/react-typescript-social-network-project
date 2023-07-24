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

    const [filter, setFilter] = useState({sort:''});
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchQueryChange = (newSearchQuery: string) => {
        setSearchQuery(newSearchQuery);
    };
    const sortedPosts = useMemo(() => {
        if(filter.sort){
            return [...posts].sort((a, b) => (a as any)[filter.sort].localeCompare((b as any)[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.body.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPosts])

    const createPost = (newPost: any)  => { // пофиксить any type
        setPosts([...posts, newPost])
    }
    const removePost = (post: PostProps) => {
        setPosts(posts.filter((p) => p.id !== post?.id))
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
                    <PostFilter filter={filter} setFilter={setFilter} />
                  <div>
                      <PostList remove={removePost} posts={sortedAndSearchedPosts}/>
                  </div>
              </div>
          </Flex>
      </AppWrapper>
      </div>
  );
}

export default App;
