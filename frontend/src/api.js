// frontend/src/api.js
import axios from 'axios';

// Set the base URL to your Flask backend
const API_BASE_URL = 'http://127.0.0.1:5000';

export const queryBackend = async (query) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/query`, { query });
    return response.data;
  } catch (error) {
    console.error('Error querying backend:', error);
    throw error;
  }
};
