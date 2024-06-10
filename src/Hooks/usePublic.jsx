import axios from "axios";
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000'
})
const usePublic = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    axiosPublic.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    axiosPublic.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    })

    return axiosPublic;
};

export default usePublic;