import PropTypes from 'prop-types';
import useAuth from '../Hooks/useAuth';
import useUsers from '../Hooks/useUsers';
import { Navigate } from 'react-router-dom';

const UserRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isPublicUser, isAdminLoading] = useUsers();

    if (loading || isAdminLoading) {
        return <span className="loading loading-bars loading-lg text-[#FF3811] text-center"></span>
    }

    if (user && isPublicUser) {
        return children;
    }

    return <Navigate to="/"></Navigate>
};

export default UserRoute;

UserRoute.propTypes = {
    children: PropTypes.node,
}