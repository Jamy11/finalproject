import React from 'react'
import useJobBoard from '../../hooks/useJobBoard'
import JobView from '../../components/Job/JobView'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
const Feeds = () => {

    const { allJobData, loadingAllJob } = useJobBoard()

    if (!loadingAllJob) {
        return (
            <div>
                Loading
            </div>
        )
    }
    return (
        <>
            <Header />
            <div aria-label="group of cards" tabindex="0" class="focus:outline-none py-8 w-full">
                {allJobData.length === 0 ? <>
                    Please Add Jobs
                </> :
                    allJobData.map(item => <JobView item={item} />

                    )}


            </div>
            <Footer />
        </>

    )
}

export default Feeds