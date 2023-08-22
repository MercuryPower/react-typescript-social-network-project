import React, {useState} from 'react';
import Flex from "./Flex";
import Post, {PostProps} from "./Post";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import styled from "styled-components";
import LoadingSpinner from "../UI/Loading Spinner/LoadingSpinner";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFontAwesome, faRotateRight} from "@fortawesome/free-solid-svg-icons";
import Span from "../UI/Span/Span";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import Shaking from "../UI/Animation/Shaking";
import Rotating from "../UI/Animation/Rotating";
import ErrorMessage from "./ErrorMessage";
import NoPosts from "./NoPosts";

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
    isPostsLoading:boolean;
    postError:string;
}


const PostList = ({posts, remove,isPostsLoading, postError}: PostListProps)=> {
    // if(isPostsLoading){
    //     return (
    //             <LoadingSpinner /> // bug when posts loading with observation api I will remove that and it's works, need to fix
    //         )
    // }
    if(postError){
        return(
            <ErrorMessage postError={postError} />
        )
    }
    if(!isPostsLoading && posts.length < 0){
        return(
           <NoPosts />
            )
        }
    return (
        <div>
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
        </div>

    );
};

export default PostList;