import React, { useEffect } from 'react'
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    UserButton,
    useUser,
    RedirectToSignIn,
    SignIn,
    UserProfile,
    useClerk
} from "@clerk/clerk-react";
import axios from 'axios';
import useMyUser from '../../../hooks/useMyUser';
const Profile = () => {

    const { user, isLoaded } = useUser()
    const { mongodbUserData, updateOrCreateUser } = useMyUser()

    useEffect(() => {

        if (user && isLoaded && mongodbUserData) {

            const newUserObject = {
                username: user.username,
                email: user.primaryEmailAddress.emailAddress,
                clerkId: user.id,
                fullName: user.fullName,
                userType: 'jobSeeker',
            }
            updateOrCreateUser( newUserObject )
        }

    }, [user])

    
    if ( !isLoaded  && mongodbUserData ) {
        return (
            <div>
                <h1>
                    Loading
                </h1>
            </div>
        )
    }

    return (
        <>
            <div class="relative max-w-md mx-auto md:max-w-5xl min-w-0 break-words bg-gray-100 w-full mb-6 shadow-2xl rounded-xl">
                <div class="px-6">
                    <div class="flex flex-wrap justify-center">
                        <div class="w-full flex justify-center  mt-6">
                            <div class="relative">
                                <UserButton />
                            </div>
                        </div>
                        <div class="w-full text-center mt-20">
                            <h6 class="text-blue-700 font-bold leading-normal mb-1">Click Profile Picture to edit</h6>
                        </div>
                    </div>
                    <div class="text-center mt-2">
                        <h1 class="text-2xl text-slate-700 font-bold leading-normal mb-1">Full Name: {user?.fullName}</h1>
                        <h1 class="text-2xl text-slate-700 font-bold leading-normal mb-1">User Name: {user?.username}</h1>
                    </div>
                    <div class="mt-6 py-6 border-t border-slate-200 text-center">
                        <div class="flex flex-wrap justify-center">
                            <div class="w-full px-4">
                                <h1 class="text-2xl text-slate-700 font-bold leading-normal mb-1">About Me</h1>
                                <p class="font-light leading-relaxed text-slate-600 mb-4"> { mongodbUserData.bio ? mongodbUserData.bio : 'Add Your Bio' } </p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 py-6 border-t border-slate-200 text-center">
                        <div class="flex flex-wrap justify-center">
                            <div class="w-full px-4">
                                <h1 class="text-2xl text-slate-700 font-bold leading-normal mb-1">Professional Experience</h1>
                                <p class="font-light leading-relaxed text-slate-600 mb-4">{ mongodbUserData.professionalExperience ? mongodbUserData.professionalExperience : 'Add Your Professional Experience' } </p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 py-6 border-t border-slate-200 text-center">
                        <div class="flex flex-wrap justify-center">
                            <div class="w-full px-4">
                                <h1 class="text-2xl text-slate-700 font-bold leading-normal mb-1">Educational Background</h1>
                                <p class="font-light leading-relaxed text-slate-600 mb-4">{ mongodbUserData.educationalBackground ? mongodbUserData.educationalBackground : 'Add Your Professional Experience' } </p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 py-6 border-t border-slate-200 text-center">
                        <div class="flex flex-wrap justify-center">
                            <div class="w-full px-4">
                                <h1 class="text-2xl text-slate-700 font-bold leading-normal mb-1">Other Details</h1>
                                <p class="font-light leading-relaxed text-slate-600 mb-4">Phone Number: { mongodbUserData.phoneNumber ? mongodbUserData.phoneNumber : 'Add Your Phone Number' } </p>
                                <p class="font-light leading-relaxed text-slate-600 mb-4">Country: { mongodbUserData.country ? mongodbUserData.country : 'Add Your Country' } </p>
                                <p class="font-light leading-relaxed text-slate-600 mb-4">State: { mongodbUserData.state ? mongodbUserData.state : 'Add Your State' } </p>
                                <p class="font-light leading-relaxed text-slate-600 mb-4">City: { mongodbUserData.city ? mongodbUserData.city : 'Add Your City' } </p>
                                <p class="font-light leading-relaxed text-slate-600 mb-4">Street Address: { mongodbUserData.streetAddress ? mongodbUserData.streetAddress : 'Add Your Street Address' } </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile