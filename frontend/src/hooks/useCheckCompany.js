import { useUser } from '@clerk/clerk-react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useCheckCompany = () => {
    const [checkInCompany, setCheckInCompany] = useState(false)
    const { user, isLoaded } = useUser()


    const checkUserOwnCompany = (email) => {

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/inacompany?email=${email}`).then(response => {
            if (response.data) {
                setCheckInCompany(response.data)
            }
        }).catch(error => {
            console.log(error);
        })
    }
    useEffect(() => {
        if (user && isLoaded) {
            const email = user.primaryEmailAddress.emailAddress

            checkUserOwnCompany(email)
        }
    }, [])
    
    return (
        {
            checkInCompany
        }
    )
}

export default useCheckCompany