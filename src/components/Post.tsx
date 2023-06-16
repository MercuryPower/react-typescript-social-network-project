import React, {Component, useState} from 'react';
import Flex from "./Flex";
import '../App.scss'
import Button from "../UI/Button/Button";
import styled from "styled-components";

export interface PostProps {
    id?:number;
    title?:string;
    body?:string;
    number?: number;
    remove:(post: PostProps) => void;
}

const Post = (props : PostProps) => {
    const handleRemove = () => {
        props.remove(props);
    };
    return (
            <Flex className={'Post'} justifyContent={'space-between'} alignItems={'center'} margin={'15px'}  padding={'15px'}>
                <div>
                    <strong>{props.number}. {props.title}</strong>
                    <div>
                        {props.body}
                    </div>
                </div>
                <div>
                    <Button onClick={handleRemove}>Удалить</Button>
                </div>
            </Flex>
    );
}

export default Post;