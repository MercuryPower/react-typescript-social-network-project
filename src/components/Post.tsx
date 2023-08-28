import React, {useState} from 'react';
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
    width: 550px;
    border: 1px solid black;
    border-radius: 25px;
    height: fit-content;
    justify-content: center;
    word-break: break-all;
    background: linear-gradient(90deg, rgba(89, 83, 255, 0.8) 0%, rgba(135, 135, 212, 1) 50%, rgba(126, 199, 214, 1) 100%);
    color:white;
`
const StyledPostText = styled.p`
    font-size:18px;
    max-height: 4.5em;
    overflow: hidden;
`
export interface PostProps {
    id:number;
    title?:string;
    body?:string;
    number?: number;
    photoUrl?: string;
    date?:string | number;
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
    const handleRemovePost = () => {
        props.remove(props)
    };
    return (
        <>
            <StyledPost>
                <Flex justifyContent={'space-between'} wrap={'nowrap'} alignItems={'center'}>
                    <div>
                        <h4><strong>{props.title}</strong></h4>
                        <div className={'date_block'}>
                            <h6>{props.date}</h6>
                        </div>
                    </div>
                    <Flex justifyContent={'flex-end'} direction={'column'}>
                        <Flex direction={'column'} alignItems={'flex-end'}>
                            <Button color={'white'} onClick={() => {navigate(`/home/${props.id}`)}} margin={'0 0 7px 0'}>
                                <FontAwesomeIcon icon={faEye} />
                            </Button>
                        </Flex>
                        <Flex direction={'column'} alignItems={'flex-end'}>
                            <Button color={'white'}  onClick={handleShowModal} radius={'25px'}><FontAwesomeIcon icon={faTrashCan} /></Button>
                        </Flex>
                    </Flex>
                </Flex>
                <div className={'post_photo'}>
                    <img src={props.photoUrl} alt={props.title} />
                </div>
                <br/>
                <StyledPostText>{props.body}</StyledPostText>
            </StyledPost>
            <ModalWindow show={modalShow} onClose={handleCloseModal} onConfirm={handleRemovePost} confirmButtonText={' Delete this post'} cancelButtonText={" Close"}>
                Are you sure?
                The data will be lost.
            </ModalWindow>
        </>
    );
}

export default Post;