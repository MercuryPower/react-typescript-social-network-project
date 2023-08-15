import React, {useState} from 'react';
import {Navigate, Route, RouteProps, Routes} from "react-router-dom";
import UserPage from "../pages/UserPage";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PostPage from "./PostPage";
import {publicRoutes, privateRoutes} from "./router";

interface AppRouterProps {
    searchQuery:string;
}

const AppRouter= ({searchQuery}:AppRouterProps) => {
    const isAuth = false;
    return (
        isAuth ?
        <Routes>
            {privateRoutes.map(route => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={
                        route.path === '/home' ? (
                            <route.element searchQuery={searchQuery} />
                        ) : (
                            <route.element />
                        )
                    }
                />
            ))}
        </Routes>
            :
        <Routes>
            {publicRoutes.map(route => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                />
            ))}
            <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
    );
};

export default AppRouter;