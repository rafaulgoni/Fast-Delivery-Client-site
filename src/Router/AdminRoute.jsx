import PropTypes from 'prop-types';
import useAdmin from '../Hooks/useAdmin';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    if (loading || isAdminLoading) {
        return <span className="loading loading-bars loading-lg text-[#FF3811] text-center"></span>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/"></Navigate>
};

export default AdminRoute;

AdminRoute.propTypes = {
    children: PropTypes.node,
}