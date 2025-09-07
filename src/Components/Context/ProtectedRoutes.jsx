import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContextProvider.jsx";
import Loader from "../Loader.jsx";

const ProtectedRoutes = () => {
    const location = useLocation();
    const auth = useAuth();

    if (!auth) return <Loader />;
    if (auth.loading) return <Loader />;

    return auth.isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default ProtectedRoutes;
