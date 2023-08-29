import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./components/Navigation";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import {Provider} from "react-redux";
import {store} from "./store";

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
    // <Provider store={store}>
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
    // </Provider>
  );
}

export default App;
