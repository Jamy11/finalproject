import React from 'react'
import AdminSidebar from '../../../components/Sidebar/AdminSidebar'
import AdminPageController from '../admin/AdminPageController'

const Dashboard = ( ) => {

  return (
    <div className="flex flex-no-wrap">

      <AdminSidebar />
      {/* Remove class [ h-64 ] when adding a card block */}
      <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
        {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
        <div className="w-full  " style={{ overflow: 'scroll', height: '45rem' }}>
          
          <AdminPageController />
        </div>
      </div>
    </div>
  )
}

export default Dashboard