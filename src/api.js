import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1337',
});

export const fetchData = async () => {
  try {
    const response = await api.get('/articles');
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};

