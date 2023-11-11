import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clearAuthDetails } from '../../utils/auth'
import { userLogout } from '../../store/user/actions'
import { Navigate } from 'react-router-dom'

function Logout() {
    const dispatch = useDispatch()
    useEffect(() => {
        clearAuthDetails();
        dispatch(userLogout())
    }, [])
  return <Navigate to='/' />
}

export default Logout