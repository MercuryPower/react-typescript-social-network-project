import React, {Component} from 'react';
import Flex from "./Flex";
import styled from "styled-components";

const AddNewPost = () => {
        return (
            <Flex  justifyContent={'center'} alignItems={'center'} padding={'5px'} className={'PostBox'}>
                What's new?
                <input/>
            </Flex>
        );
}

export default AddNewPost;