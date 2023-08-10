import React, {useEffect, useState} from 'react';
import Flex from "./Flex";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {useParams} from "react-router-dom";
import LoadingSpinner from '../UI/Loading Spinner/LoadingSpinner';
import {PostProps, StyledPost} from "./Post";
import styled from "styled-components";


const StyledPostById = styled(StyledPost)`
  height: 0;
`
interface CommentsProps {
    postId: number;
    id: number;
    name: string;
    email:string;
    body:string;
}
const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState<PostProps | null>(null);
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
       const response = await PostService.getById(id);
       setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, [])
    return (
        <div>
                <Flex justifyContent={'center'} margin={'2rem'}>
                    <h1>You are in Post Page!</h1>
                </Flex>
                {post !== null ? (
                    <Flex justifyContent={'center'} direction={'column'} alignItems={'center'}>
                        {post.id} {post.title}
                        <div>
                            {post.body}
                        </div>
                    </Flex>)
                :
                    <LoadingSpinner />}
            <Flex justifyContent={'center'} margin={'2.5rem'}>
                <h2>Comments:</h2>
            </Flex>
                {isComLoading ?
                    <LoadingSpinner />
                :
                    <Flex margin={'5rem'}>
                        {comments.map((comm : CommentsProps) =>
                            <div >
                                <h5><b>{comm.email}</b>:</h5>
                                <div>
                                    {comm.body}
                                </div>
                            </div>
                        )}
                    </Flex>
                }
        </div>
    );
};

export default PostPage;