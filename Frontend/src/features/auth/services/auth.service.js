import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api/auth',
    withCredentials: true
});

export async function Registerservice({Username,email,password}){
    const response = await  api.post('/register',{
        Username,
        email,
        password
    });

    return response.data
}

export async function Loginservice({email,password}){
    const response = await api.post('/login',{
        email,
        password
    });

    return response.data;

}

