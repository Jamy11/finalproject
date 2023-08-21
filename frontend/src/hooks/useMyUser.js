import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const useMyUser = () => {
    let navigate = useNavigate();
    const [mongodbUserData, setMongodbUserData] = useState({})
    const { user, isLoaded } = useUser()


    const updateUser = (updateUserData, redirectRoute) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/updateuser`, updateUserData)
            .then(function (response) {
                if (response) {
                    return navigate(redirectRoute)
                }
                else {
                    console.log('Could Not add item')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const getUserData = (email) => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/getuserdatafromdb?email=${email}`)
            .then(function (response) {
                if (response.data) {
                    setMongodbUserData(response.data)
                }
                else {
                    console.log('Could Not add item')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const updateOrCreateUser = (newUserObject) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/handeluser`, newUserObject)
            .then(function (response) {
                if (response) {
                    console.log(response)
                }
                else {
                    console.log('Could Not add item')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        if (user && isLoaded) {
            const email = user.primaryEmailAddress.emailAddress

            getUserData(email)

        }
    }, [user])

    return (
        {
            updateUser,
            getUserData,
            mongodbUserData,
            setMongodbUserData,
            updateOrCreateUser
        }
    )
}

export default useMyUser