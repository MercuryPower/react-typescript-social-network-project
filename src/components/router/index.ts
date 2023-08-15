import UserPage from "../../pages/UserPage";
import Home from "../../pages/Home";
import PostPage from "../PostPage";
import React from "react";
import Login from "../../pages/Login";

interface RoutesConfig{
    path:string
    element:React.FC<any>;
    props?: Record<string, any>
    exact?:boolean;
}
export const privateRoutes : RoutesConfig[] = [
    {path: '/me', element: UserPage, exact: true },
    {path: '/home', element: Home, props:{searchQuery: ''},  exact: true },
    {path: '/home/:id', element: PostPage, exact: true },
]
export const publicRoutes : RoutesConfig[] = [
    {path: '/login', element: Login, exact: true }
]