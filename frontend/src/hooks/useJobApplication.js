import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useJobApplication = () => {
    const [showButton, setShowButton] = useState(false)
    const [count , setCount ] = useState(0)
    const postJobApplication = (data) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/job-application`, data).then(response => {
            if (response.data) {
                setShowButton(false)
            }
        }).catch(error => {
            console.log(error);
        })
    }

    const getJobApplication = (jobId, userId) => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/job-application?jobId=${jobId}&userId=${userId}`).then(response => {
            if (response.data) {
                setShowButton(response.data)
            }
        }).catch(error => {
            console.log(error);
        })
    }

    const getJobApplicationCount = (jobId) =>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/job-application-count?jobId=${jobId}`).then(response => {
            if (response.data) {
                setCount(response.data)
            }
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        {
            postJobApplication,
            getJobApplication,
            showButton,
            getJobApplicationCount,
            count
        }
    )
}

export default useJobApplication