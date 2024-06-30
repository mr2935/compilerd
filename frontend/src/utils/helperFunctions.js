import axios from 'axios';

const API_URL = 'http://localhost:3000/api/execute';

export const executeCode = async (data) => {
    try {
        const response = await axios.post(API_URL, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Server error');
    }
};
