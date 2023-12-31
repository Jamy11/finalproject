import { useUser } from '@clerk/clerk-react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const useUserType = () => {
    const [checkType, setCheckType] = useState('')
    const [checkTypeLoading, setCheckTypeLoading] = useState(true)
    const { user, isLoaded } = useUser()

    const getType = (email) => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/checktype?email=${email}`).then(response => {
            if (response.data) {
                setCheckType(response.data)
                setCheckTypeLoading(false)
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
            checkType,
            checkTypeLoading,
            getType
        }
    )
}

export default useUserType