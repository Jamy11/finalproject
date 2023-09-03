import { useUser } from '@clerk/clerk-react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useCategory = () => {
    const [allCategory, setAllCategory] = useState([])
    const [categoryNames, setCategoryNames] = useState([])
    const { user, isLoaded } = useUser()
    const navigate = useNavigate()

    const getAllCategory = () => { // Get All Category
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/category`).then(response => {
            if (response.data) {
                setAllCategory(response.data)
            }
        }).catch(error => {
            console.log(error);
        })
    }

    const createCategory = (data) => {  // Create A Category
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/category`, data).then(response => {
            if (response.data) {
                return navigate('/view-category')
            }
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteCategory = (id) => { // Delete A Category
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/category/${id}`)
            .then(res => {
                if (res?.data?.acknowledged) {
                    setAllCategory(allCategory.filter(item => item._id !== id))
                }
            })
    }

    const getCategoryNames = (email) => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/categorylist?${email}`).then(response => {
            if (response.data) {
                setCategoryNames(response.data)
            }
        }).catch(error => {
            console.log(error);
        })
    }
    useEffect(() => {
        getAllCategory()
        if (user && isLoaded) {
            const email = user.primaryEmailAddress.emailAddress
            getCategoryNames(email)
        }
    }, [])

    return {
        allCategory,
        createCategory,
        deleteCategory,
        categoryNames
    }
}

export default useCategory