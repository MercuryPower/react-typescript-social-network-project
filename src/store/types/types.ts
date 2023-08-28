import {PostProps} from "../../components/Post";

export interface PostState {
    posts: PostProps[];
    isLoading: boolean;
    error: null | string;
}

export enum PostActionTypes{
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'
}
export interface FetchPostsAction{
    type: PostActionTypes.FETCH_POSTS;
}
export interface FetchPostsSuccessAction{
    type: PostActionTypes.FETCH_POSTS_SUCCESS;
    payload: PostProps[];
}
export interface FetchPostsErrorAction{
    type: PostActionTypes.FETCH_POSTS_ERROR;
    payload: string;
}
export type PostAction = FetchPostsAction | FetchPostsSuccessAction | FetchPostsErrorAction;