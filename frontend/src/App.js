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
import Error404page from './pages/public/Error404page';
import Dashboard from './pages/private/AllUser/Dashboard';
import Feed from './pages/public/Feed';
import Companies from './pages/public/Companies';
import Subscription from './pages/public/Subscription';
import PostedJob from './pages/private/jobseeker/PostedJob';


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




          {/* Admin Path */}
          <Route path='/UserProfile' element={<UserProfile />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/edit-profile' element={<Dashboard />} />
          <Route path='/view-subscription' element={<Dashboard />} />
          <Route path='/add-subscription' element={<Dashboard />} />
          <Route path='/view-role' element={<Dashboard />} />
          <Route path='/add-role' element={<Dashboard />} />
          <Route path='/view-user' element={<Dashboard />} />
          <Route path='/view-companies' element={<Dashboard />} />
          <Route path='/view-category' element={<Dashboard />} />
          <Route path='/add-category' element={<Dashboard />} />

          {/* Job Seeker */}
          <Route path='/post-a-job' element={<Dashboard />} />
          <Route path='/create-a-company' element={<Dashboard />} />
          <Route path='/see-all-jobs' element={<Dashboard />} />
          <Route path='/posted-jobs/:id' element={<PostedJob />} />



          {/* Redirect path if user select a path which don't exsist */}
          <Route path='/*' element={<Error404page />} />

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
