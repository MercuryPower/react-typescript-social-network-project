import React, {Component, useState} from 'react';
import Flex from "./Flex";
import Button from "../UI/Button/Button";
import '../App.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faNewspaper, faEnvelope, faUserGroup} from "@fortawesome/free-solid-svg-icons";


const Menu = () =>{
        const [button, setButton] = useState([

        ]);

        return (
            <Flex direction={'column'} justifyContent={'space-evenly'} alignItems={'center'}  className={['Menu','Button']} >
                <Button>
                    <FontAwesomeIcon icon={faUser} /> My page</Button>
                <Button>
                    <FontAwesomeIcon icon={faNewspaper}/> News</Button>
                <Button>
                    <FontAwesomeIcon icon={faEnvelope} /> Messages</Button>
                <Button>
                    <FontAwesomeIcon icon={faUserGroup} /> Friends</Button>
            </Flex>
        );
}

export default Menu;