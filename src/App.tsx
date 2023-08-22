import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./components/Navigation";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

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

        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <Navigation onSearchQueryChange={handleSearchQueryChange}/>
                <AppRouter searchQuery={searchQuery}  />
            </BrowserRouter>
        </AuthContext.Provider>
  );
}

export default App;
