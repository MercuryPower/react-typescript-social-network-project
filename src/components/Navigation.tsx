import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Input from "../UI/Input/Input";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Flex from "./Flex";
import styled from "styled-components";

{/*Kyoyu SN*/}

interface NavigationProps {
    onSearchQueryChange?:(newSearchQuery:string) => void;
}
const Navigation:React.FC<NavigationProps> = (props) => {
    const handleInputChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        if(props.onSearchQueryChange){
            props.onSearchQueryChange(e.target.value);
        }
    }
        return (
            <Navbar expanded collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container >
                    <Navbar.Brand href= "#home"><b>KSN</b> - Social Network</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Container>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <Input onChange={handleInputChange}  placeholder={'Search'}></Input>
                            </Container>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
}

export default Navigation;