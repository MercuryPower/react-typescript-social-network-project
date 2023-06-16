import React, {Component, useState} from 'react';
import Flex from "./Flex";
import styled from "styled-components";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import post, {PostProps} from "./Post";

export interface CreateANewPostProps {
    create:(newPost: PostProps) => void;
}
const CreateANewPost:React.FC<CreateANewPostProps> = ({create}) => {
    const [post, setPost] = useState({
        body:'',
    })
    const addNewPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newPost: PostProps = {
            ...post, id:Date.now(), title:'New Post'
        }
        create(newPost);
        setPost({body:''})
    }
        return (
            <Flex justifyContent={'center'} alignItems={'center'} padding={'15px'} className={'PostBox'}>
                <form action="">
                    Hi!
                    <Input value={post.body} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPost({...post, body: e.target.value})}/>
                    <Button margin={'0rem 1rem'} small onClick={addNewPost} radius={'25px'} >
                        <FontAwesomeIcon icon={faCheck} size={'lg'}/>
                    </Button>
                </form>
            </Flex>
        );
}

export default CreateANewPost;