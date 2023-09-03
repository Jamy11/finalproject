import React from 'react'

const CategoryTableRow = ({item,deleteCategory}) => {

  return (
    <tr class="bg-gray-100 border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.username}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.email}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>deleteCategory(item._id)}>
                        Delete
                    </button>
                </td>
            </tr>
  )
}

export default CategoryTableRow