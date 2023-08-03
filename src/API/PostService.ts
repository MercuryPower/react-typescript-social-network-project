import axios from "axios";

export default class PostService {
    static async getAll(){
        const response = await axios.get('https://jsonplaceholder.typicode.cogim/posts')
        return response.data;
    }
}