import React, {useEffect, useState} from 'react';
import Flex from "./Flex";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {useParams} from "react-router-dom";
import LoadingSpinner from '../UI/Loading Spinner/LoadingSpinner';
import {PostProps, StyledPost} from "./Post";
import styled from "styled-components";



interface CommentsProps {
    postId: number;
    id: number;
    name: string;
    email:string;
    body:string;
}
interface PhotosProps {
    postId: number;
    id: number;
    title:string;
    url:string;
}
const PostPage = () => {
    const params = useParams();
    const [post, setPost    ] = useState<PostProps | null>(null);
    const [comments, setComments] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
       const response = await PostService.getById(id);
       setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    })
    const [fetchPhotos, isPhotosLoading, photoError] = useFetching(async (id) => {
        const response = await PostService.getPhotoById(id);
        setPhotos(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
        fetchPhotos(params.id);

    }, [])
    return (
        <div>
            {post !== null ? (
                    <>
                        <Flex justifyContent={'center'} margin={'2rem'}>
                            <h1>{post.id} {post.title}</h1>
                        </Flex>
                        <Flex justifyContent={'center'} direction={'column'} alignItems={'center'}>
                            {post.body}
                        </Flex>
                    </>
                )
                :
                    <LoadingSpinner />
            }
            <Flex justifyContent={'center'} margin={'5rem 0 0 0'}>
                <h2>Comments:</h2>
            </Flex>
                {isComLoading ?
                    <LoadingSpinner />
                :
                    <Flex>
                        {comments.map((comm : CommentsProps) =>
                            <div key={comm.id} className={'comments_block'}>
                                <h5 className={'comments_block_email'}>{comm.email}:</h5>
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