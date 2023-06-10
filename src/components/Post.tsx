import React, {Component, useState} from 'react';
import Flex from "./Flex";
import '../App.scss'
import Button from "./Button";
import styled from "styled-components";

interface StyledPostProps{
    small?:boolean;
    alignSelf?:string;
    color?:string;
    background?:string;
    font?:string;
}
interface PostProps {
    id?:number,
    title?:string,
    body?:string,
    post?: PostProps
    children?: React.ReactNode;
}

const Post = (props : PostProps) => {
        return (
            <div>
                <Flex className={'Post'} >
                    <div>
                        <strong>{props.id}. {props.title}</strong>
                        <div>
                            {props.body}
                        </div>
                    </div>
                    <Button>Hello Hi</Button>
                </Flex>
            </div>
        );
}

export default Post;