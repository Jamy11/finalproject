import './App.css';
import Home from './pages/public/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/public/Contact';
import {
  SignedIn,
  SignedOut,
  UserProfile
} from "@clerk/clerk-react";
import Error404page from './pages/public/Error404page';
import Dashboard from './pages/private/AllUser/Dashboard';
import Feeds from './pages/public/Feeds';
import Companies from './pages/public/Companies';
import Subscription from './pages/public/Subscription';
import PostedJob from './pages/private/recruter/PostedJob';
import SingleJobView from './pages/public/SingleJobView';
import Chat from './pages/private/Chat';

function App() {


  return (
    <>
      <Router>
        <Routes>
          {/* Public Path  */}
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/feed' element={<Feeds />} />
          <Route path='/feed/:id' element={<SingleJobView />} />
          <Route path='/companies' element={<Companies />} />
          <Route path='/subscription' element={<Subscription />} />
          <Route path='/chat' element={<Chat />} />




          {/* Admin Path */}
          <Route path='/UserProfile' element={
            <>
              <SignedIn>
                <UserProfile />
              </SignedIn>
              <SignedOut>
                <Home />
              </SignedOut>
            </> } />

          <Route path='/dashboard' element={ <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <Home />
              </SignedOut>
            </>} />
          <Route path='/edit-profile' element={ <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <Home />
              </SignedOut>
            </>} />
          <Route path='/view-subscription' element={ <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <Home />
              </SignedOut>
            </>} />
          <Route path='/add-subscription' element={ <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <Home />
              </SignedOut>
            </>} />
          <Route path='/view-role' element={ <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <Home />
              </SignedOut>
            </>} />
          <Route path='/add-role' element={ <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <Home />
              </SignedOut>
            </>} />
          <Route path='/view-user' element={ <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <Home />
              </SignedOut>
            </>} />
          <Route path='/view-companies' element={ <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <Home />
              </SignedOut>
            </>} />
          <Route path='/view-category' element={ <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <Home />
              </SignedOut>
            </>} />
          <Route path='/add-category' element={ <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <Home />
              </SignedOut>
            </>} />

          {/* Job Seeker */}
          <Route path='/post-a-job' element={ <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <Home />
              </SignedOut>
            </>} />
          <Route path='/create-a-company' element={ <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <Home />
              </SignedOut>
            </>} />
          <Route path='/see-all-jobs' element={ <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <Home />
              </SignedOut>
            </>} />
          <Route path='/posted-jobs/:id' element={<PostedJob />} />
          <Route path='/see-applied-person/:id' element={ <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <Home />
              </SignedOut>
            </>} />



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
