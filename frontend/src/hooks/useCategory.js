import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useCategory = () => {
    const [allCategory, setAllCategory] = useState([])
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

    const deleteCategory = (id) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/category/${id}`)
            .then(res => {
                if (res?.data?.acknowledged) {
                    setAllCategory(allCategory.filter(item => item._id !== id))
                }
            })
        }

        useEffect(() => {
            getAllCategory()
        }, [])

        return {
            allCategory,
            createCategory,
            deleteCategory
        }
    }

    export default useCategory