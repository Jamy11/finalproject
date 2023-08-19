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


function App() {
  const {user,isLoaded} = useUser()



  useEffect(() => {

      if( user && isLoaded ){
        const newUserObject = {
          username:user.username,
          email:user.primaryEmailAddress.emailAddress,
          clerkId: user.id,
          fullName:user.fullName
        }
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/handeluser`,newUserObject)
        .then(function (response) {
          if (response) {
            console.log(response.data)
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
          <Route path='/' element={<Home />} />
          <Route path='/contact' element= {<Contact/>} />
          <Route path='/UserProfile' element= {<UserProfile/>} />

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
