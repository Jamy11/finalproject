import React, { useEffect } from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import { useParams } from 'react-router-dom';
import useJobBoard from '../../../hooks/useJobBoard'
const PostedJob = () => {
  const { id } = useParams(); // Access the parameter va
  const { loadingPostedJob, getPostedJobData, postedJobData  } = useJobBoard()

  useEffect(() => {
    getPostedJobData(id)
  }, [])
  

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
        </div>
      </section>

      <Footer />
    </>

  )
}

export default PostedJob