import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Input from "../UI/Input/Input";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Flex from "./Flex";

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
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href= "#home"><b>KSN</b> - Social Network</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">My profile</Nav.Link>
                            <Nav.Link href="#pricing">News</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Flex alignItems={'center'}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <Input onChange={handleInputChange}  placeholder={'Search'}></Input>
                            </Flex>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
}

export default Navigation;