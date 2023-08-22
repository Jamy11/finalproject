import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const useAllUser = () => {
    const [userList, setUserList] = useState([])
    let navigate = useNavigate();

    const makeAdmin = (email, value) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users`, { email, value })
            .then(function (response) {
                if (response) {
                    const updatedUserList = userList.map(item => {
                        if (item.email === email) {
                            return { ...item, userType: value };
                        }
                        return item;
                    });

                    setUserList(updatedUserList)
                    // return navigate(redirectRoute)
                }
                else {
                    console.log('Could Not add item')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const getAllUser = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`)
            .then(function (response) {
                if (response.data) {
                    setUserList(response.data)
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
        getAllUser()
    }, [])

    return (
        {
            getAllUser,
            makeAdmin,
            userList

        }
    )
}

export default useAllUser