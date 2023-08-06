import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./components/Navigation";
import AppRouter from "./components/AppRouter";

function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchQueryChange = (newSearchQuery: string) => {
        setSearchQuery(newSearchQuery);
    };

    return (
        <BrowserRouter>
            <Navigation onSearchQueryChange={handleSearchQueryChange}/>
            <AppRouter searchQuery={searchQuery}  />
        </BrowserRouter>
  );
}

export default App;
