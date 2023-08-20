import React from 'react'
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
const Profile = () => {
    const { signOut, user } = useClerk()
    const buttonStyle = {

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
                                <p class="font-light leading-relaxed text-slate-600 mb-4">An artist of considerable range, Mike is the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile