import React, {useEffect, useRef, useState} from 'react';
import Flex from "../components/Flex";
import Menu from "../components/Menu";
import CreateANewPost from "../components/CreateANewPost";
import PostList from "../components/PostList";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../components/utils/pages";
import {PostProps} from "../components/Post";
import styled from "styled-components";
import {useObserver} from "../hooks/useObserver";
import LoadingSpinner from "../UI/Loading Spinner/LoadingSpinner";


export const PostsWrapper = styled.div`
  margin: 20px;
`;


const Home = ({ searchQuery }: { searchQuery: string }) => {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [filter, setFilter] = useState({sort:''});
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, searchQuery);
    const lastElement = useRef<HTMLDivElement | null>(null);
    const hasPostsToLoad = sortedAndSearchedPosts.length > 0;
    const [postsPhoto, setPostsPhoto] = useState<string[]>([]);



    const [fetchPostsData, isPostsLoading, postError] = useFetching(async (limit, page) =>{
        const response = await PostService.getAll(limit, page);
        const photoResponse = await PostService.getAllPhotos();
        const extractedUrls = photoResponse.data.map((photo: { url: string; }) => photo.url); // Извлекаем URL фотографий
        setPostsPhoto(extractedUrls);
        setPosts([...posts, ...response.data ]);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })

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
                {/*<MenuWrapper>*/}
                {/*    <Menu/>*/}
                {/*</MenuWrapper>*/}
                <PostsWrapper>
                    <br/>
                    <React.Fragment>
                        <CreateANewPost create={createPost} />
                        {/*<PostFilter filter={filter} setFilter={setFilter} />*/}
                        <PostList
                            photoUrls={postsPhoto}
                            remove={removePost}
                            posts={sortedAndSearchedPosts}
                            isPostsLoading={isPostsLoading}
                            postError={postError}
                        />
                        {isPostsLoading && posts.length > 0 && <LoadingSpinner />}
                    </React.Fragment>
                    <div ref={lastElement}></div>
                </PostsWrapper>
            </div>
    );
};

export default Home;