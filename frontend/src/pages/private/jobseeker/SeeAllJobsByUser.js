import React from 'react'
import SeeAllJobsByUserData from '../../../components/JobSeekerComponents/SeeAllJobsByUserData'
import useJobBoard from '../../../hooks/useJobBoard'

const SeeAllJobsByUser = () => {

    const { jobsByUser, deleteJobsByUser } = useJobBoard();
    console.log(jobsByUser)
    return (
        <div aria-label="group of cards" tabindex="0" class="focus:outline-none py-8 w-full">
            {jobsByUser.length === 0 ? <>
                Please Add Jobs
            </> :
                jobsByUser.map(item => <SeeAllJobsByUserData item={item} deleteJobsByUser={deleteJobsByUser} />

                )}


        </div>
    )
}

export default SeeAllJobsByUser