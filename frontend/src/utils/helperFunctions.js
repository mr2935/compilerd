import axios from 'axios';

const API_URL = 'https://laughing-dollop-q55rgr6465rh4r57-3000.app.github.dev/api/execute';

export const executeCode = async (data) => {
    try {
        const response = await axios.post(API_URL, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Server error');
    }
};
