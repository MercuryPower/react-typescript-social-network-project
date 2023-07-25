import React, {Component, useState} from 'react';
import Flex from "./Flex";
import '../App.scss'
import Button from "../UI/Button/Button";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import ModalWindow from "../UI/Modal/ModalWindow";

const StyledPost = styled.div`
    padding:1rem;
    margin:1rem;
    border: 1px solid black;
    border-radius: 25px;
    height: 30em;
    max-width: 30rem;
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
    const [modalShow, setModalShow] = useState(false)

    const handleCloseModal = () => {
        setModalShow(false); // Close the modal when the "Nope" button is clicked
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
                        <h4><strong>{props.number}. {props.title}</strong></h4>
                    </div>
                    <div>
                        <Button  onClick={handleShowModal} radius={'25px'}><FontAwesomeIcon icon={faTrashCan} /></Button>
                    </div>
                </Flex>
                <StyledPostText>{props.body}</StyledPostText>
            </StyledPost>
        <ModalWindow show={modalShow} onClose={handleCloseModal} onConfirm={handleRemove} />
        </>
    );
}

export default Post;