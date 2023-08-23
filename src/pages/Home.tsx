import React, {useEffect, useRef, useState} from 'react';
import Navigation from "../components/Navigation";
import Flex from "../components/Flex";
import Menu from "../components/Menu";
import CreateANewPost from "../components/CreateANewPost";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../components/utils/pages";
import {PostProps} from "../components/Post";
import styled from "styled-components";
import {useObserver} from "../hooks/useObserver";
import LoadingSpinner from "../UI/Loading Spinner/LoadingSpinner";
import NoPosts from "../components/NoPosts";


const MenuWrapper = styled.div`
  flex:1;
  justify-content: flex-end;
  display: flex;
  max-height: 300px;
  padding: 20px;
`
const PostsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const EmptySpace = styled.div`
  flex: 1;
`;

const initialPosts: PostProps[] = [];
const Home = ({ searchQuery }: { searchQuery: string }) => {
    const [posts, setPosts] = useState(initialPosts);
    const [filter, setFilter] = useState({sort:''});
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, searchQuery);
    const lastElement = useRef<HTMLDivElement | null>(null);
    const hasPostsToLoad = sortedAndSearchedPosts.length > 0;



    const [fetchPostsData, isPostsLoading, postError] = useFetching(async (limit, page) =>{
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })


    // need to fix when post adding scroll throwing in up of page
    useObserver(lastElement, page < totalPages && !isPostsLoading,isPostsLoading,hasPostsToLoad, () => {
        setPage((prevPage) => prevPage + 1)
    })
    useEffect(() => {
        fetchPostsData(limit,page);
    }, [page]);


    const createPost = (newPost: PostProps)  => {
        setPosts([...posts, newPost])
    }
    const removePost = (post: PostProps) => {
        setPosts(posts.filter((p) => p.id !== post?.id))
    }



    return (
        <div>
            <Flex justifyContent={'center'}>
                <MenuWrapper>
                    <Menu/>
                </MenuWrapper>
                <PostsWrapper>
                    <br/>
                    <div>
                        <CreateANewPost create={createPost} />
                        <PostFilter filter={filter} setFilter={setFilter} />
                        <PostList remove={removePost} posts={sortedAndSearchedPosts} isPostsLoading={isPostsLoading} postError={postError}/>
                        {isPostsLoading && posts.length > 0 && <LoadingSpinner />}
                    </div>
                    <div ref={lastElement}></div>
                </PostsWrapper>
                <EmptySpace />
            </Flex>
        </div>
    );
};

export default Home;