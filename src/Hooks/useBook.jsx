
import usePublic from './usePublic';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useBook = () => {
    const axiosSecure = usePublic();
    const { user} = useAuth();
    const { refetch, data: book = [] } = useQuery({
        queryKey: ['book', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/book/${user.email}`);
            return res.data;
        }
    })

    return [book, refetch]
};

export default useBook;