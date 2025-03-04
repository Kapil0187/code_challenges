import axios from 'axios';

export const loginUser = async ({ user }) => {
  try {
    const response = await axios.post('http://localhost:3000/users/login', { user });
    return response.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data.error || 'Login failed. Please try again.' };
    } else if (error.request) {
      return { error: 'No response from the server. Please check your connection.' };
    } else {
      return { error: 'An error occurred. Please try again.' };
    }
  }
};

export const registerUser = async ({ user }) => {
  try {
    const response = await axios.post('http://localhost:3000/users/signup', { user });
    return response.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response.data.error || 'Registration failed. Please try again.' };
    } else if (error.request) {
      return { error: 'No response from the server. Please check your connection.' };
    } else {
      return { error: 'An error occurred. Please try again.' };
    }
  }
};
