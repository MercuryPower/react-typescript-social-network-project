import React, {Component, useState} from 'react';
import Flex from "./Flex";
import Button from "../UI/Button/Button";
import '../App.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faNewspaper, faEnvelope, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Li from "../UI/Li/Li";

const StyledMenu = styled(Flex)`
  display: flex;
  ol{
      padding: 0;
    }
  
  button{
    width: 100%;
    margin: 5px;
    height: 50px;
    border-radius: 5px;
  }
`

const Menu = () =>{

        const menuItems = [
            { icon: faUser, text:'My page'},
            { icon: faNewspaper, text:'News'},
            { icon: faEnvelope, text:'Messages'},
            { icon: faUserGroup, text:'Friends'},
    ];

        return (
            <StyledMenu alignItems={'center'}>
                <nav>
                    <ol>
                        {menuItems.map((item, index) => (
                            <Li key={index}>
                                <Button color={'black'}>
                                    <FontAwesomeIcon icon={item.icon} /> {item.text}
                                </Button>
                            </Li>
                        ))}
                    </ol>
                </nav>
            </StyledMenu>
        );
}

export default Menu;