import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos';

export default {
    getAll: () => axios.get(url),
    // getOne: ({ id }) => axios.get(`${url}/${id}`),
    // update: (toUpdate) => axios.put(url, toUpdate),
    // create: (toCreate) => axios.put(url, toCreate),
    // delete: ({ id }) => axios.delete(`${url}/${id}`)
}