import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useJobBoard = () => {
    const navigate = useNavigate()
    const [ postedJobData, setPostedJobData ] = useState({})
    const [ loadingPostedJob, setLoadingPostedJob] = useState(false)

    const createJob = (data) => { //Create company
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/job-board`, data).then(response => {
            if (response.data) {
                alert('Job Created. View Feeds Page')
                // console.log(response.data)
                return navigate(`/posted-jobs/${response.data.insertedId}`)
            }
            else {
                alert('Name Is Already Taken')
            }
        }).catch(error => {
            console.log(error);
        })
    }

    const getPostedJobData = (id) => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/postedjob?id=${id}`).then(response => {
            if (response.data) {
                setPostedJobData(response.data)
                setLoadingPostedJob(true)
            }
            else {
                alert('Name Is Already Taken')
            }
        }).catch(error => {
            console.log(error);
        })
    }


    return (
        {
            createJob,
            getPostedJobData,
            postedJobData,
            loadingPostedJob
            
        }
    )
}

export default useJobBoard