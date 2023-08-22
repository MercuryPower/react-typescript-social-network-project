import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "./router";
import {AuthContext} from "../context";
import LoadingSpinner from "../UI/Loading Spinner/LoadingSpinner";

interface AppRouterProps {
    searchQuery:string;
}

const AppRouter= ({searchQuery}:AppRouterProps) => {
    const {isAuth,setIsAuth, isLoading} = useContext(AuthContext);

    if(isLoading){
        return <LoadingSpinner />
    }
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
            <Route path="*" element={<Navigate to="/home" />} />
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
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};

export default AppRouter;