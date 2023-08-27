import React from 'react'
import useAllUser from '../../../hooks/useAllUser'
import UserTableRow from '../../../components/AdminComponents/UserTableRow'

const ViewUser = () => {
  const { userList, roleChange } = useAllUser()

  return (
    <div class="flex flex-col">
            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full">
                            <thead class="bg-white border-b">
                                <tr>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        User Full Name
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Username
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Email
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        User Type
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* rotation data  */}

                                {userList.length === 0 ?
                                    <>
                                        <h1 className='text-center text-red-800 text-2xl'>
                                            Please Add Data
                                        </h1>
                                    </>
                                    : userList.map( item => <UserTableRow item={item} roleChange={roleChange}/>)}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ViewUser