import axios from "axios";

export default class PostService {
    static async getAll(limit = 5, page = 1){
        return await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params:{
                _limit: limit,
                _page: page
            }
        })
    }
    static async getById(id: string | undefined){
        return await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
    }

    static async getCommentsByPostId(id:string | undefined){
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    }
}