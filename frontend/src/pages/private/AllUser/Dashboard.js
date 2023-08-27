import React from 'react'
import AdminSidebar from '../../../components/Sidebar/AdminSidebar'
import AdminPageController from '../admin/AdminPageController'
import useUserType from '../../../hooks/useUserType'
import JobSeekerSidebar from '../../../components/Sidebar/JobSeekerSidebar'
import RecruterSidebar from '../../../components/Sidebar/RecruterSidebar'
import { useUser } from '@clerk/clerk-react'
import JobSeekerPageController from '../jobseeker/JobSeekerPageController'
import RecruterPageController from '../recruter/RecruterPageController'

const Dashboard = () => {
  const { checkType } = useUserType();
  const { isLoaded } = useUser()

  if (!isLoaded) {
    return (
      <div>
        Loading
      </div>
    )
  }


  return (
    <div className="flex flex-no-wrap">
      {checkType === 'admin' ? <AdminSidebar /> : checkType === 'jobSeeker' ? <JobSeekerSidebar /> : <RecruterSidebar />}

      {/* Remove class [ h-64 ] when adding a card block */}
      <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
        {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
        <div className="w-full  " style={{ overflow: 'scroll', height: '45rem' }}>
        {checkType === 'admin' ? <AdminPageController /> : checkType === 'jobSeeker' ? <JobSeekerPageController /> : <RecruterPageController />}


        </div>
      </div>
    </div>
  )
}

export default Dashboard