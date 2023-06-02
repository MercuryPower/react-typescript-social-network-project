import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, {createGlobalStyle} from 'styled-components';
import Flex from './components/Flex';
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import "./App.scss";
import Button from './components/Button'

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
`

function App() {
  return (
   <AppWrapper>
       <Navigation />
       <Flex direction={'column'} alignItems={'start'} margin={'20'}>
           <Button><FontAwesomeIcon icon={solid("user")} style={{color: "#747c8b",}} />Моя страница</Button>
           <Button>Новости</Button>
           <Button>Сообщения</Button>
           <Button>Друзья</Button>
       </Flex>
   </AppWrapper>
  );
}

export default App;
