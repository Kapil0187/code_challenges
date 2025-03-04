import axios from 'axios';

export const loginUser = async({user}) =>{
    try {
        const response = await axios.get('http://localhost:3000//users/login', {user});
        return response.data;
    } catch (error) {
        return {error: error.response.data.error};
    }
}

export const registerUser = async({user}) => {
    try {
        console.log(user);
        const response = await axios.post('http://localhost:3000//users/signup', {user});
        return response.data;
    } catch (error) {
        return {error: error.response.data.error};
    }
}
