import React from 'react'
import { useLocation } from 'react-router-dom'
import Profile from '../AllUser/Profile'
import EditProfile from '../AllUser/EditProfile'


const JobSeekerPageController = () => {
    const { pathname } = useLocation()

    return (
        <>
            { pathname === '/dashboard' ? <Profile /> : pathname === '/edit-profile' && <EditProfile />  }
        </>
    )
}

export default JobSeekerPageController