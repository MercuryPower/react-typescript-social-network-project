import React, {useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import UserPage from "../pages/UserPage";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PostPage from "./PostPage";

interface AppRouterProps {
    searchQuery:string;
}
const AppRouter= ({searchQuery}:AppRouterProps) => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route
                path={'/me'}
                element={<UserPage />} />
            <Route
                path={'/home'}
                element={<Home searchQuery={searchQuery} />} />
            <Route
                path={'/home/:id'}
                element={<PostPage/>} />
            <Route
                path="*"
                element={<NotFound />}
            />
        </Routes>
    );
};

export default AppRouter;