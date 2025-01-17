import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import usePublic from './usePublic';

const useAdmin = () => {
    const { user, loading } = useAuth();
    const publicAPI = usePublic();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await publicAPI.get(`/users/admin/${user.email}`);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;