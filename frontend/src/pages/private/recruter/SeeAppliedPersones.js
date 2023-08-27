import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useJobApplication from '../../../hooks/useJobApplication'
import SeeAppliedPerson from '../../../components/SeeAppliedPerson/SeeAppliedPerson'

const SeeAppliedPersones = () => {
    const { id } = useParams()
    const { applicantList, getAllApplicant } = useJobApplication()

    useEffect(() => {
        getAllApplicant(id)
    }, [])


    console.log(id)
    return (
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full">
                            <thead class="bg-white border-b">
                                <tr>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Full Name
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Professional Experience
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Applicant UserName
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Applicant E-mail
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Applicant Number
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Country
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* rotation data  */}

                                {applicantList.length === 0 ?
                                    <>
                                        <h1 className='text-center text-red-800 text-2xl'>
                                            No Applicant
                                        </h1>
                                    </>
                                    : applicantList.map(item => <SeeAppliedPerson item={item} />)}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeeAppliedPersones