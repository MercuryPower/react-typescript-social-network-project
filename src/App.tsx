import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import "./App.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: white;
`


function App() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path={'/me'} element={<UserPage />} />
                <Route path={'/home'} element={<Home />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
