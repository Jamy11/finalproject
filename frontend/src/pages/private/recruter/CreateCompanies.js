import React from 'react'
import { useForm } from "react-hook-form";
import useCompany from '../../../hooks/useCompany';
import { useUser } from '@clerk/clerk-react';

const CreateCompanies = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { CreateCompany } = useCompany()
  const {user} = useUser()
  
  const onSubmit = data => {
    const updateCompanyData = {email: user.primaryEmailAddress.emailAddress, fullName : user.fullName, ...data }
    CreateCompany(updateCompanyData)
  };
  return (
    <div >
      <form id="login" onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white ">
          <div className="container mx-auto bg-white  mt-10 rounded px-4">
            <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
              <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                <p className="text-lg text-gray-800  font-bold">Company Information</p>
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
                  <label htmlFor="companyName" className="pb-2 text-sm font-bold text-gray-800 ">
                  Company Name
                  </label>
                  <input type="text" {...register("name", { required: true })} id="name" name="name" className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                </div>
                <div className="mx-auto">
                  <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
                    <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                      <label htmlFor="about" className="pb-2 text-sm font-bold text-gray-800 ">
                        Company Details
                      </label>
                      <textarea {...register('companyDetails', { required: true })} id="companyDetails" name="companyDetails" className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400" rows={5} />
                      <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">Character Limit: 200</p>
                    </div>
                  </div>
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

export default CreateCompanies