import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import usePublic from './usePublic';

const useUsers = () => {
    const { user, loading } = useAuth();
    const publicAPI = usePublic();
    const { data: isPublicUser, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isMain'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is admin', user)
            const res = await publicAPI.get(`/users/user/${user.email}`);
            return res.data?.publicUser;
        }
    })
    return [isPublicUser, isAdminLoading]
};

export default useUsers;