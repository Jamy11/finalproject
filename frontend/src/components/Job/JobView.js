import React from 'react'
import { useNavigate } from 'react-router-dom'

const JobView = ({ item }) => {
    const navigate = useNavigate()
    const goTo = (id)=>{
        return navigate(`/feed/${id}`)
    }
    return (
        <div class="lg:flex items-center justify-center w-full" onClick={()=>goTo(item._id)} style={{cursor:'pointer'}}>
            <div tabindex="0" aria-label="card 1" class="focus:outline-none  m-7 mx-7 bg-white dark:bg-gray-800  p-6 shadow rounded min-w-[90%]">
                <div class="flex items-center border-b border-gray-200 dark:border-gray-700  pb-6">
                    <img src="https://cdn.tuk.dev/assets/components/misc/doge-coin.png" alt="coin avatar" class="w-12 h-12 rounded-full" />
                    <div class="flex items-start justify-between w-full">
                        <div class="pl-3 w-full">
                            <p tabindex="0" class="focus:outline-none text-xl font-medium leading-10 text-gray-800 dark:text-white ">{item?.companyName}</p>
                            <p tabindex="0" class="focus:outline-none text-xl font-medium leading-5 text-gray-800 dark:text-white ">{item?.jobTitle}</p>
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-2 text-gray-500 dark:text-gray-200 ">{item?.categoryName}</p>
                        </div>
                    </div>
                </div>
                <div class="px-2">
                    <p tabindex="0" class="focus:outline-none text-sm leading-5 py-4 text-gray-600 dark:text-gray-200 ">{item.jobDetails}</p>
                    <div tabindex="0" class="focus:outline-none flex">
                        <div class="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{item.fullName}</div>
                        <div class="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{item.email}</div>
                        <div class="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{item.username}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobView