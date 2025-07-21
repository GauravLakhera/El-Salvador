import axios from 'axios';

const api = axios.create({
  baseURL: '/api/lands',
  headers: { 'Content-Type': 'multipart/form-data' },
});

export const fetchLands      = () => api.get('/');
export const fetchLandById   = id => api.get(`/${id}`);
export const createLand      = data => api.post('/', data);
export const updateLand      = (id, data) => api.put(`/${id}`, data);
export const deleteLand      = id => api.delete(`/${id}`);
