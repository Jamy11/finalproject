import './App.css';
import Home from './pages/public/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/public/Contact';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
  SignIn,
  UserProfile
} from "@clerk/clerk-react";
import { useEffect } from 'react';
import axios from 'axios';
import Error404page from './pages/public/Error404page';
import Dashboard from './pages/private/AllUser/Dashboard';
import Feed from './pages/public/Feed';
import Companies from './pages/public/Companies';
import Subscription from './pages/public/Subscription';


function App() {
  const { user, isLoaded } = useUser()



  useEffect(() => {

    if (user && isLoaded) {
      const newUserObject = {
        username: user.username,
        email: user.primaryEmailAddress.emailAddress,
        clerkId: user.id,
        fullName: user.fullName,
        userType: 'jobSeeker'
      }
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/handeluser`, newUserObject)
        .then(function (response) {
          if (response) {
            console.log(response)
          }
          else {
            console.log('Could Not add item')
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  }, [user])

  return (
    <>
      <Router>
        <Routes>
          {/* Public Path  */}
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/companies' element={<Companies />} />
          <Route path='/subscription' element={<Subscription />} />

          {/* Redirect path if user selcet a path which dont exisit */}
          <Route path='/*' element={<Error404page />} />


          <Route path='/UserProfile' element={<UserProfile />} />
          <Route path='/dashboard' element={<Dashboard />} />


        </Routes>
      </Router>

      {/* <SignedIn>
         <UserButton />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut> */}

    </>


  );
}

export default App;
