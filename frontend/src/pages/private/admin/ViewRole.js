import React from 'react'
import RoleTableRow from '../../../components/AdminComponents/RoleTableRow';
import useRole from '../../../hooks/useRole';

const ViewRole = () => {

    const { roles, deleteRole } = useRole()
    
    // console.log(roles)

    const deleteRoleFunc = (id) =>{
        deleteRole(id)
    }


    return (
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full">
                            <thead class="bg-white border-b">
                                <tr>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Role Name
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Details
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Created By UserName
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Created By E-mail
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* rotation data  */}

                                {roles.length === 0 ?
                                    <>
                                        <h1 className='text-center text-red-800 text-2xl'>
                                            Please Add Data
                                        </h1>
                                    </>
                                    : roles.map( item => <RoleTableRow item={item} deleteRoleFunc={deleteRoleFunc}/>)}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewRole