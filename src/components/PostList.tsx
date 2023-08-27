import React from 'react';
import Post, {PostProps} from "./Post";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";
import NoPosts from "./NoPosts";
import {format} from "date-fns";
import PostService from "../API/PostService";

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
    photoUrls: string[];
}


const PostList = ({posts,photoUrls, remove,isPostsLoading, postError}: PostListProps)=> {


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
    if(!isPostsLoading && !posts.length){
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
                    <Post  photoUrl={photoUrls[index] || ''} date={format(new Date(), "'today' h:mm aaaa")}  number={index + 1} {...post} remove={remove} />
                </CSSTransition>
            )}
            </StyledTransitionGroup>
        </div>

    );
};

export default PostList;