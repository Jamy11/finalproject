import React from 'react'
import { useLocation } from 'react-router-dom'
import Profile from '../AllUser/Profile'
import EditProfile from '../AllUser/EditProfile'
const Page = () => {
    const { pathname } = useLocation()
    return (
        <>
            { pathname === '/dashboard' ? <Profile /> : pathname === '/edit-profile' ? <EditProfile /> : <>Dead</>}
        </>
    )
}

export default Page