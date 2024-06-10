import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://b9a12-server-side-rafaulgoni.vercel.app'
})
const usePublicAPI = () => {
    return axiosPublic
};

export default usePublicAPI;