import {PostAction, PostActionTypes} from "../types/types";
import {Dispatch} from "react";
import axios from "axios";

export const fetchPosts = () => {
    return async (dispatch : Dispatch<PostAction>) => {
        try {
            dispatch({type: PostActionTypes.FETCH_POSTS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch({type: PostActionTypes.FETCH_POSTS_SUCCESS, payload:response.data})
        }
        catch (error){
            dispatch({
                type: PostActionTypes.FETCH_POSTS_ERROR,
                payload: 'Error'})
        }
    }
}