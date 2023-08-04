import React, {useEffect, useMemo, useState} from 'react';
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
import axios from "axios";
import LoadingSpinner from "./UI/Loading Spinner/LoadingSpinner";
import {useFetching} from "./hooks/useFetching";
import PostService from "./API/PostService";
import {getPageCount} from "./components/utils/pages";
import {usePagination} from "./hooks/usePagination";
import Button from "./UI/Button/Button";
import Pagination from "./components/Pagination";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
`
const MenuWrapper = styled.div`
  display: flex;
  max-height: 300px;
  padding: 20px;
`
const initialPosts: PostProps[] = [];

function App() {
    const [posts, setPosts] = useState(initialPosts);
    const [filter, setFilter] = useState({sort:''});
    const [searchQuery, setSearchQuery] = useState('');
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, searchQuery);
    const pagination = usePagination(totalPages);


    const [fetchPostsData, isPostsLoading, postError] = useFetching(async (limit, page) =>{
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })
    useEffect(() => {
        fetchPostsData(limit,page);
    }, []);


    const handleSearchQueryChange = (newSearchQuery: string) => {
        setSearchQuery(newSearchQuery);
    };
    const createPost = (newPost: PostProps)  => {
        setPosts([...posts, newPost])
    }
    const removePost = (post: PostProps) => {
        setPosts(posts.filter((p) => p.id !== post?.id))
    }
    const changePage = (page:number) => {
        setPage(page);
        fetchPostsData(limit,page);
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
                          <PostList remove={removePost} posts={sortedAndSearchedPosts} isPostsLoading={isPostsLoading} postError={postError}/>
                      </div>
                      <div>
                        <Pagination totalPages={totalPages} page={page} changePage={changePage} />
                      </div>
                  </div>
              </Flex>
          </div>
      </AppWrapper>
  );
}

export default App;
