import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useDeliveryMen from "../Hooks/useDeliveryMen";
import PropTypes from 'prop-types';


const DeliveryMenRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isDelivery, isDeliveryLoading] = useDeliveryMen()
    const location = useLocation();

    if (loading || isDeliveryLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isDelivery) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default DeliveryMenRoute;

DeliveryMenRoute.propTypes = {
    children: PropTypes.node,
}