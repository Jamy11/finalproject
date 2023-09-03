import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import useJobBoard from '../../hooks/useJobBoard';
import useMyUser from '../../hooks/useMyUser';
import useJobApplication from '../../hooks/useJobApplication';

const SingleJobView = () => {
  const { id } = useParams(); // Access the parameter va
  const { loadingPostedJob, getPostedJobData, postedJobData } = useJobBoard()
  const { mongodbUserData } = useMyUser()
  const { postJobApplication, getJobApplication, showButton } = useJobApplication()

  useEffect(() => {
    getPostedJobData(id)
    if (mongodbUserData._id) {
      getJobApplication(id, mongodbUserData._id)
    }
  }, [mongodbUserData ,showButton])

  const applyJob = () => {
    const applyJobData = { jobId: id, userId: mongodbUserData._id }
    postJobApplication(applyJobData)
  }
  if (!loadingPostedJob) {
    return (
      <div>
        Loading
      </div>
    )
  }
  return (
    <>
      <Header />
      <section>
        <div class=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div class="w-full mx-auto">
              <h1 className='text-2xl leading-10'>Company: <span className='font-bold'>{postedJobData?.companyName}</span></h1>
              <h1 className='text-xl leading-10'>Job Title: <span className='font-bold'>{postedJobData?.jobTitle}</span></h1>
              <h2 className='text-lg leading-10'>Posted By: <span className='font-bold'>{postedJobData?.fullName}</span></h2>
              <p className='leading-6'>{postedJobData?.jobDetails}</p>


            </div>
          </div>
          {showButton ? <>
            <span
              className="relative px-5 py-3 overflow-hidden font-medium text-gray-600
           bg-gray-100 border border-gray-100 rounded-lg shadow-inner group" style={{ cursor: 'pointer' }}
              onClick={applyJob} >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Apply Now</span>
            </span>
          </> :
            <span
              className="relative px-5 py-3 overflow-hidden font-medium text-gray-600
                  bg-gray-100 border border-gray-100 rounded-lg shadow-inner group" style={{ cursor: 'no-drop' }}
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-red-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-red-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-red-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-red-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-red-900 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Already Applied</span>
            </span>
          }

        </div>

      </section>
      <Footer />
    </>
  )
}

export default SingleJobView