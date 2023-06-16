import React, {useState} from 'react';
import Flex from "./Flex";
import Post, {PostProps} from "./Post";

interface PostListProps {
    posts: PostProps[];
}
const PostList = ({posts}: PostListProps)=> {
    return (
        <Flex direction={'column'} justifyContent={'space-between'} padding={'15px'}>
            {posts.map((post: PostProps, index: number) =>
                <Post number={index + 1} id={post.id} title={post.title} body={post.body} key={post.id}/>
            )}
        </Flex>
    );
};

export default PostList;