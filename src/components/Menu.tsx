import React, {Component, useState} from 'react';
import Flex from "./Flex";
import Button from "../UI/Button/Button";
import '../App.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faNewspaper, faEnvelope, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Li from "../UI/Li/Li";
import {Link, redirect} from "react-router-dom";

const StyledMenu = styled.div`
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
            { icon: faUser, text:'My page', link:'/me'},
            { icon: faNewspaper, text:'News', link:'/news'},
            { icon: faEnvelope, text:'Messages',link:'/messages'},
            { icon: faUserGroup, text:'Friends',link:'/friends'},
    ];

        return (
            <StyledMenu>
                <nav>
                    <ol>
                        {menuItems.map((item, index) => (
                            <Li key={index}>
                                <Link to={item.link}>
                                    <Button color={'black'}>
                                        <FontAwesomeIcon icon={item.icon} /> {item.text}
                                    </Button>
                                </Link>
                            </Li>
                        ))}
                    </ol>
                </nav>
            </StyledMenu>
        );
}

export default Menu;