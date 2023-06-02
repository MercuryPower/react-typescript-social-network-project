import React, {Component} from 'react';
import Navigation from "../components/Navigation";
import Menu from "../components/Menu";
import styled from "styled-components";




const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
`
class Home extends Component {
    render() {
        return (
            <AppWrapper>
                <Navigation/>
                <Menu/>
            </AppWrapper>
        );
    }
}

export default Home;