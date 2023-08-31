import React from 'react';
import Flex from "../components/Flex";
import Menu from "../components/Menu";
import CreateANewPost from "../components/CreateANewPost";
import PostList from "../components/PostList";
import LoadingSpinner from "../UI/Loading Spinner/LoadingSpinner";
import {PostsWrapper} from "./Home";


const Friends = () => {
    return (
        <div>
            <Flex justifyContent={'center'}>
                <PostsWrapper>

                    {/*<div ref={lastElement}></div>*/}
                </PostsWrapper>
            </Flex>
        </div>
    );
};

export default Friends;