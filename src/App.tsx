import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";

function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchQueryChange = (newSearchQuery: string) => {
        setSearchQuery(newSearchQuery);
    };
    return (
        <BrowserRouter>
            <Navigation onSearchQueryChange={handleSearchQueryChange}/>
            <Routes>
                <Route path={'/me'} element={<UserPage />} />
                <Route path={'/home'} element={<Home searchQuery={searchQuery} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
