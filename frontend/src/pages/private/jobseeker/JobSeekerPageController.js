import React from 'react'
import { useLocation } from 'react-router-dom'
import PostJob from './PostJob'
import CreateCompanies from './CreateCompanies'
import Profile from '../AllUser/Profile'
import EditProfile from '../AllUser/EditProfile'

const JobSeekerPageController = () => {
    const { pathname } = useLocation()

    return (
        <>
            { pathname === '/dashboard' ? <Profile /> : pathname === '/edit-profile' ? <EditProfile /> :
              pathname === '/post-a-job' ? <PostJob /> : pathname === '/create-a-company' &&  <CreateCompanies /> }
        </>
    )
}

export default JobSeekerPageController