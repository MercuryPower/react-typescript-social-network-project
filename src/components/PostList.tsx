import React, {useState} from 'react';
import Flex from "./Flex";
import Post, {PostProps} from "./Post";

interface PostListProps {
    posts: PostProps[];
    remove: (post: PostProps) => void;
}
const PostList = ({posts, remove}: PostListProps)=> {
    return (
        <Flex direction={'column'} justifyContent={'space-between'} padding={'15px'}>
            {posts.map((post: PostProps, index: number) =>
                <Post key={post.id} number={index + 1} {...post} remove={remove} />
            )}
        </Flex>
    );
};

export default PostList;