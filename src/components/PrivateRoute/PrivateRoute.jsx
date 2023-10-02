import { useContext } from "react";
import { Context } from "../AuthContext/AuthContext";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Context)
    console.log(loading);
    console.log(user);
    if (loading) {
        return <div>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>

};

export default PrivateRoute;