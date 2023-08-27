import axios from "axios";

export default class PostService {
    static async getAll(limit = 5, page = 1) {
        return await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
    }

    static async getById(id: string | number | undefined) {
        return await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
    }

    static async getCommentsByPostId(id: string | number | undefined) {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    }

    static async getPhotoById(id: string | number | undefined) {
        return await axios.get(`https://jsonplaceholder.typicode.com/photos/` + id);
    }

    static async getAllPhotos() {
        return await axios.get('https://jsonplaceholder.typicode.com/photos/');
    }
}