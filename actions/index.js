import axios from 'axios';

export const getTodos = async (req) => {
    return await axios.get('http://jsonplaceholder.typicode.com/users/1/todos').then(response => response.data);
};
