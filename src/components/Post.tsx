import React, {Component, useState} from 'react';
import Flex from "./Flex";
import '../App.scss'
import Button from "../UI/Button/Button";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import ModalWindow from "../UI/Modal/ModalWindow";
import {faEye} from "@fortawesome/free-regular-svg-icons/faEye";
import {useNavigate} from "react-router-dom";

export const StyledPost = styled.div`
    padding:1rem;
    margin:1rem;
    border: 1px solid black;
    border-radius: 25px;
    height: 30em;
    justify-content: center;
    flex-wrap: nowrap;
    overflow-wrap: break-word;
    background: linear-gradient(90deg, rgba(89, 83, 255, 0.8) 0%, rgba(135, 135, 212, 1) 50%, rgba(126, 199, 214, 1) 100%);
    color:white;
`
const StyledPostText = styled.p`
    font-size:18px;
`
export interface PostProps {
    id?:number;
    title?:string;
    body?:string;
    number?: number;
    remove:(post: PostProps) => void;
}

const Post = (props : PostProps) => {

    const navigate = useNavigate();

    const [modalShow, setModalShow] = useState(false)

    const handleCloseModal = () => {
        setModalShow(false);
    };
    const handleShowModal = () =>{
        setModalShow(true);
    }
    const handleRemove = () => {
        props.remove(props)
    };
    return (
        <>
            <StyledPost>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <div>
                        <h4><strong>{props.id}. {props.title}</strong></h4>
                    </div>
                <Flex justifyContent={'flex-end'} direction={'column'}>
                    <Flex direction={'column'} alignItems={'flex-end'}>
                        <Button color={'white'} onClick={() => {navigate(`/home/${props.id}`)}} radius={'25px'} margin={'0 0 7px 0'}><FontAwesomeIcon icon={faEye} /><b> Show</b></Button>
                    </Flex>
                    <Flex direction={'column'} alignItems={'flex-end'}>
                        <Button color={'white'}  onClick={handleShowModal} radius={'25px'}><FontAwesomeIcon icon={faTrashCan} /> Delete</Button>
                    </Flex>
                </Flex>
                </Flex>
                <StyledPostText>{props.body}</StyledPostText>
            </StyledPost>
            <ModalWindow show={modalShow} onClose={handleCloseModal} onConfirm={handleRemove} confirmButtonText={' Delete this post'} cancelButtonText={" Close"}>
                Are you sure?
                The data will be lost.
            </ModalWindow>
        </>
    );
}

export default Post;