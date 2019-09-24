import axios from 'axios';

export const getTasks = () => {
    return axios.get('/api/tasks')
};

export const getTask = (id) => {
    return axios.get(`/api/tasks/${id}`)
};

export const createTask = (data) => {
    return axios.post('/api/tasks', data)
};

export const updateTask = (id, data) => {
    return axios.patch(`/api/tasks/${id}`, data)
};

export const deleteTask = (id) => {
    return axios.delete(`/api/tasks/${id}`)
};