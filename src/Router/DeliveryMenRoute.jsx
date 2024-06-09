import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useDeliveryMen from "../Hooks/useDeliveryMen";
import PropTypes from 'prop-types';


const DeliveryMenRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isDelivery, isDeliveryLoading] = useDeliveryMen()

    if (loading || isDeliveryLoading) {
        return <span className="loading loading-bars loading-lg text-[#FF3811] text-center"></span>
    }

    if (user && isDelivery) {
        return children;
    }

    return <Navigate to="/" ></Navigate>
};

export default DeliveryMenRoute;

DeliveryMenRoute.propTypes = {
    children: PropTypes.node,
}