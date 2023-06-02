import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, {createGlobalStyle} from 'styled-components';
import Flex from './components/Flex';
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import "./App.scss";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
`

function App() {
  return (
      <div>
      <AppWrapper>
          <Navigation/>
          <Menu/>
      </AppWrapper>
      </div>
  );
}

export default App;
