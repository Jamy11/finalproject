import React from 'react'
import { useLocation } from 'react-router-dom'
import Profile from '../AllUser/Profile'
import EditProfile from '../AllUser/EditProfile'
import ViewSubscription from './ViewSubscription'
import ViewRole from './ViewRole'
import AddRole from './AddRole'
import ViewUser from './ViewUser'
import ViewCompanies from './ViewCompanies'
import ViewCategory from './ViewCategory'
import AddCategory from './AddCategory'

const AdminPageController = ( ) => {
    const { pathname } = useLocation()

    return (
        <>
            { pathname === '/dashboard' ? <Profile /> : pathname === '/edit-profile' ? <EditProfile /> 
            : pathname === '/view-role' ? <ViewRole /> : pathname === '/add-role' ? <AddRole /> 
            : pathname === '/view-user' ? <ViewUser /> : pathname === '/view-category'? <ViewCategory /> :
            pathname === '/add-category'? <AddCategory /> : pathname === '/view-companies' && <ViewCompanies />}
        </>
    )
}

export default AdminPageController