import React from 'react'

const UserTableRow = ({ item, roleChange }) => {
    return (
        <>
            <tr class="bg-gray-100 border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.fullName}</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.username}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.email}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.userType}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.userType === 'jobSeeker' ?
                        <>
                            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => roleChange(item.email, 'admin')}>
                                Make Admin
                            </button>
                            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => roleChange(item.email, 'recruter')}>
                                Make Recruter
                            </button>
                        </>
                        :
                        item.userType === 'admin' ?
                            <>
                                <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => roleChange(item.email, 'jobSeeker')}>
                                    Make JobSeeker
                                </button>
                                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => roleChange(item.email, 'recruter')}>
                                    Make Recruter
                                </button>
                            </>

                            :
                            <>
                                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => roleChange(item.email, 'admin')}>
                                    Make Admin
                                </button>
                                <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => roleChange(item.email, 'jobSeeker')}>
                                    Make JobSeeker
                                </button>
                            </>
                    }

                </td>
            </tr>
        </>
    )
}

export default UserTableRow