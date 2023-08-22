import { useUser } from '@clerk/clerk-react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useUserType = () => {
    const [checkType, setCheckType] = useState('')
    const { user, isLoaded } = useUser()

    const getType = (email) => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/checktype?email=${email}`).then(response => {
            if (response.data) {
                setCheckType(response.data)
            }
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        if (user && isLoaded) {
            const email = user.primaryEmailAddress.emailAddress

            getType(email)
        }
    }, [user])

    return (
        {
            checkType
        }
    )
}

export default useUserType