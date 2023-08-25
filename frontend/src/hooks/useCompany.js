import { useUser } from '@clerk/clerk-react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const useCompany = () => {
    const [companyList, setCompanyList] = useState([])
    let navigate = useNavigate();
    const { user, isLoaded } = useUser()

    const CreateCompany = (data) => { //Create company
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/company`, data).then(response => {
            if (response.data) {
                alert('Company Created. Now You can post job')
                return navigate('/post-a-job')
            }
            else{
                alert('Name Is Already Taken')
            }
        }).catch(error => {
            console.log(error);
        })
    }

    const getCompanyList = (email) => { // Get Company List
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/companylist?email=${email}`).then(response => {
            if (response.data) {
                setCompanyList(response.data)
            }
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        if (user && isLoaded) {
            const email = user.primaryEmailAddress.emailAddress
            getCompanyList(email)
        }
    }, [user])


    return (
        {
            CreateCompany,
            companyList
        }
    )
}

export default useCompany