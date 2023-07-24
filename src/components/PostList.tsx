import React, {useState} from 'react';
import Flex from "./Flex";
import Post, {PostProps} from "./Post";

interface PostListProps {
    posts: PostProps[];
    remove: (post: PostProps) => void;
}
const PostList = ({posts, remove}: PostListProps)=> {
    if(!posts.length){
        return (
        <Flex justifyContent={'center'} padding={'15px'}>
            <h2>There are no posts here :(</h2>
        </Flex>
        )
    }
    return (
        <Flex direction={'column'} justifyContent={'center'} padding={'15px'}>
            {posts.map((post: PostProps, index: number) =>
                <Post key={post.id} number={index + 1} {...post} remove={remove} />
            )}
        </Flex>
    );
};

export default PostList;