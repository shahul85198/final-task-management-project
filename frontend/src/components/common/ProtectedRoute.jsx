import { Outlet, useNavigate } from "react-router-dom"
import {useSelector} from 'react-redux'


export const ProtectedRoute = () => {
    const navigate = useNavigate();
    const {token} = useSelector(state => state.user);
    if (!token) {
        navigate("/login")
    }
    return (
        <Outlet />
    )
}