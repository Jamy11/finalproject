import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import useMyUser from '../../../hooks/useMyUser';

const EditProfile = () => {
    const { user, isLoaded } = useUser()
    const { updateUser, mongodbUserData } = useMyUser()
    const { register, handleSubmit, setValue } = useForm();


    // setValue('bio', mongodbUserData.bio)

    const onSubmit = data => {
        const updateUserData = {email: user.primaryEmailAddress.emailAddress, ...data }
        // console.log(data)
        updateUser(updateUserData, '/dashboard')
    };

    // console.log(mongodbUserData)]
    useEffect(() => {
        setValue('bio',mongodbUserData.bio)
        setValue('professionalExperience',mongodbUserData.professionalExperience)
        setValue('educationalBackground',mongodbUserData.educationalBackground)
        setValue('phoneNumber',mongodbUserData.phoneNumber)
        setValue('streetAddress',mongodbUserData.streetAddress)
        setValue('city',mongodbUserData.city)
        setValue('state',mongodbUserData.state)
        setValue('country',mongodbUserData.country)
      }, [mongodbUserData])

    if (!isLoaded) {
        return (
            <div>
                <h1>
                    Loading
                </h1>
            </div>
        )
    }

    return (
        <div >
            <form id="login" onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-white ">
                    <div className="container mx-auto bg-white  rounded">
                        <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white ">
                            <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                                <p className="text-lg text-gray-800  font-bold">Profile</p>
                                <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                        <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto">
                            <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
                                <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                                    <label htmlFor="about" className="pb-2 text-sm font-bold text-gray-800 ">
                                        Add Bio
                                    </label>
                                    <textarea {...register('bio')} id="bio" name="bio" className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400" rows={5} defaultValue={mongodbUserData.bio} />
                                    <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">Character Limit: 200</p>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto">
                            <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
                                <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                                    <label htmlFor="about" className="pb-2 text-sm font-bold text-gray-800 ">
                                        Add Professional Experience
                                    </label>
                                    <textarea {...register('professionalExperience')} id="professionalExperience" name="professionalExperience" className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400" rows={5} defaultValue={mongodbUserData.professionalExperience} />
                                    <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">Character Limit: 200</p>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto">
                            <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
                                <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                                    <label htmlFor="about" className="pb-2 text-sm font-bold text-gray-800 ">
                                        Add Educational Background
                                    </label>
                                    <textarea {...register('educationalBackground')} id="educationalBackground" name="educationalBackground" className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Let the world know who you are" rows={5} />
                                    <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">Character Limit: 200</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto bg-white  mt-10 rounded px-4">
                        <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                            <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                                <p className="text-lg text-gray-800  font-bold">Personal Information</p>
                                <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                        <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto pt-4">
                            <div className="container mx-auto">
                                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                    <label htmlFor="phoneNumber" className="pb-2 text-sm font-bold text-gray-800 ">
                                        Phone Number
                                    </label>
                                    <input type="number" {...register("phoneNumber")} id="phoneNumber" name="phoneNumber" className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                                </div>
                                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                    <label htmlFor="StreetAddress" className="pb-2 text-sm font-bold text-gray-800 ">
                                        Street Address
                                    </label>
                                    <input type="text" {...register("streetAddress")} id="StreetAddress" name="streetAddress" className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                                </div>
                                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                    <label htmlFor="City" className="pb-2 text-sm font-bold text-gray-800 ">
                                        City
                                    </label>
                                    <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex">
                                        <input {...register('city')} type="text" id="City" name="city" className="pl-3 py-3 w-full text-sm focus:outline-none border border-transparent focus:border-indigo-700 bg-transparent rounded placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Los Angeles" />
                                        <div className="px-4 flex items-center border-l border-gray-300 dark:border-gray-700 flex-col justify-center text-gray-500 dark:text-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 15 12 9 18 15" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                    <label htmlFor="State/Province" className="pb-2 text-sm font-bold text-gray-800 ">
                                        State/Province
                                    </label>
                                    <input {...register('state')} type="text" id="State/Province" name="state" className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="California" />
                                </div>
                                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                    <label htmlFor="Country" className="pb-2 text-sm font-bold text-gray-800 ">
                                        Country
                                    </label>
                                    <input {...register('country')} type="text" id="Country" name="country" className="border bg-transparent border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="United States" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto w-11/12 xl:w-full">
                        <div className="w-full py-4 sm:px-0 bg-white  flex justify-end">
                            <button className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300  rounded text-indigo-600 px-6 py-2 text-xs mr-4">Cancel</button>
                            <button className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm" type="submit">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditProfile