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
import EditProfile from './pages/private/AllUser/EditProfile';


function App() {


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

          {/* Redirect path if user select a path which don't exsist */}
          <Route path='/*' element={<Error404page />} />


          <Route path='/UserProfile' element={<UserProfile />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/edit-profile' element={<Dashboard />} />



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
