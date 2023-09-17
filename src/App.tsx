import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./components/Navigation";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import {Provider} from "react-redux";
import {store} from "./store";
import Menu from "./components/Menu";
import styled from "styled-components";
import Flex from "./components/Flex";
import Grid from "./components/Grid";

export const MenuWrapper = styled.div`
  justify-content: flex-end;
  display: flex;
  max-height: 300px;
  padding: 20px;
`

function App() {

    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchQueryChange = (newSearchQuery: string) => {
        setSearchQuery(newSearchQuery);
    };

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsAuth(true);
        }
        setLoading(false);
    }, [])

    return (
    <Provider store={store}>
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth,
                isLoading
            }}>
                <BrowserRouter>
                    <Navigation onSearchQueryChange={handleSearchQueryChange}/>
                    <Grid>
                            <Menu />
                        <AppRouter searchQuery={searchQuery}  />
                    </Grid>
                </BrowserRouter>
            </AuthContext.Provider>
    </Provider>
  );
}

export default App;
