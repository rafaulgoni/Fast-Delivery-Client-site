import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import usePublic from './usePublic';

const useDeliveryMen = () => {
    const { user, loading } = useAuth();
    const publicAPI = usePublic();
    const { data: isDelivery, isPending: isDeliveryLoading } = useQuery({
        queryKey: [user?.email, 'isDelivery'],
        enabled: !loading,
        queryFn: async () => {
            const res = await publicAPI.get(`/users/deliveryMen/${user.email}`);
            return res.data?.deliveryMen;
        }
    })
    return [isDelivery, isDeliveryLoading]
};

export default useDeliveryMen;