import {useMemo} from "react";
import {PostProps} from "../components/Post";

export const useSortedPosts = (posts:PostProps[], sort:string) => {
    return useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => (a as any)[sort].localeCompare((b as any)[sort]))
        }
        return posts;
    }, [sort, posts]);
}

export const usePosts = (posts:PostProps[], sort:string, searchQuery:string) => {
    const sortedPosts = useSortedPosts(posts, sort);

    return useMemo(() => {
        return sortedPosts.filter(post => post.body?.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedPosts]);
}