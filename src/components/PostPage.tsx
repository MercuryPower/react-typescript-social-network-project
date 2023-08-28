import React, {useEffect, useState} from 'react';
import Flex from "./Flex";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {useParams} from "react-router-dom";
import LoadingSpinner from '../UI/Loading Spinner/LoadingSpinner';
import {PostProps} from "./Post";


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
    const [photos, setPhotos] = useState<PhotosProps>();
    const [fetchPostById, isPostLoading, postError] = useFetching(async (id) => {
       const response = await PostService.getById(id);
       setPost(response.data);
    })
    const [fetchComments, isCommentLoading, commentError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    })
    const [fetchPhotos, isPhotoLoading, photoError] = useFetching(async (id) => {
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
                    <div className={'post_block'}>
                        <div className={'post_content'}>
                                <h1>{post.title}</h1>
                                    <div>
                                        {post.body}
                                    </div>
                            <div className={'post_page_photo'}>
                                <img src={photos?.url} alt={post.title}/>
                            </div>
                        </div>
                    </div>
                )
                :
                    <LoadingSpinner />
            }
            <Flex justifyContent={'center'} margin={'5rem 0 0 0'}>
                <h2>Comments:</h2>
            </Flex>
                {isCommentLoading ?
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