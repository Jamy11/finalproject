import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

const useJobBoard = () => {
    const navigate = useNavigate()
    const { user, isLoaded } = useUser()
    const [postedJobData, setPostedJobData] = useState({})
    const [loadingPostedJob, setLoadingPostedJob] = useState(false)
    const [jobsByUser, setJobsByUser] = useState([])

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


    const getJobsByUser = (email) => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/jobsbyuser?email=${email}`).then(response => {
            if (response.data) {
                setJobsByUser(response.data)
            }
            else {
                alert('Name Is Already Taken')
            }
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteJobsByUser = ( id ) => {

        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/jobsbyuser/${id}`)
        .then(res => {
            if (res?.data?.acknowledged) {
                setJobsByUser( jobsByUser.filter( item => item._id !== id) )
            }
        })
    }
    useEffect(() => {
        if (user && isLoaded) {
            const email = user.primaryEmailAddress.emailAddress
            getJobsByUser(email)
        }
    }, [])

    return (
        {
            createJob,
            getPostedJobData,
            postedJobData,
            loadingPostedJob,
            jobsByUser,
            deleteJobsByUser

        }
    )
}

export default useJobBoard