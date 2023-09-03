import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useRole = () => {
    const [roles, setRoles] = useState([])
    let navigate = useNavigate();


    const insertRole = (roleData, redirectRoute) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/view-role`, roleData)
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

    const getRole = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/view-role`)
            .then(function (response) {
                if (response.data) {
                    setRoles(response.data)
                }
                else {
                    console.log('Could Not add item')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const deleteRole = (id) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/view-role/${id}`)
            .then(res => {
                if (res?.data?.acknowledged) {
                    setRoles( roles.filter( item => item._id !== id) )
                }
            })
    }

    useEffect(() => {
        getRole()
    }, [])

    return (
        {
            roles,
            setRoles,
            insertRole,
            deleteRole
        }
    )
}

export default useRole