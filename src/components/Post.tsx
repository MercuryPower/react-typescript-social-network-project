import React, {Component, useState} from 'react';
import Flex from "./Flex";
import '../App.scss'
import Button from "../UI/Button/Button";
import styled from "styled-components";

export interface PostProps {
    id?:number,
    title?:string,
    body?:string,
    post?: PostProps,
    number?: number,
    children?: React.ReactNode
}

const Post = (props : PostProps) => {
        return (
                <Flex classname={'Post'} justifyContent={'space-between'} alignItems={'center'}  padding={'15px'}>
                    <div>
                        <strong>{props.number}. {props.title}</strong>
                        <div>
                            {props.body}
                        </div>
                    </div>
                    <div>
                        <Button>Удалить</Button>
                    </div>
                </Flex>
        );
}

export default Post;