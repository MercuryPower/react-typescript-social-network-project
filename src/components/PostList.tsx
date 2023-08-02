import React, {useState} from 'react';
import Flex from "./Flex";
import Post, {PostProps} from "./Post";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import styled from "styled-components";

const StyledTransitionGroup = styled(TransitionGroup)`
  .post-enter {
    transform: translateX(-150px);
    opacity: 0;
  }
  .post-enter-active {
    transform: translateX(0px);
    opacity: 1;
    transition: all 100ms ease-in;
  }
  .post-exit {
    opacity: 1;
  }
  .post-exit-active {
    transform: translateX(-150px);
    opacity: 0;
    transition: all 100ms ease-in;
  }
`
interface PostListProps {
    posts: PostProps[];
    remove: (post: PostProps) => void;
}
const PostList = ({posts, remove}: PostListProps)=> {
    if(!posts.length){
        return (
        <Flex justifyContent={'center'} padding={'1.5rem'}>
            <h2>There are no posts here :(</h2>
        </Flex>
        )
    }
    return (
        <Flex direction={'column'} justifyContent={'center'} padding={'15px'}>
            <StyledTransitionGroup>
            {posts.map((post: PostProps, index: number) =>
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                    <Post  number={index + 1} {...post} remove={remove} />
                </CSSTransition>
            )}
            </StyledTransitionGroup>
        </Flex>

    );
};

export default PostList;