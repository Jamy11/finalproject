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
} from "@clerk/clerk-react";
import Mithila from './components/mithila/Mithila';

function App() {

  return (
    <>
      {/* <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element= {<Contact/>} />
        </Routes>
      </Router>
      <SignedIn>
         <UserButton />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut> */}
      
     <Mithila name={'Jame'}/>
     {/* <Mithila name={'mithila'}/>
     <Mithila name={'babu'}/>
     <Mithila name={'pugni'}/> */}
    </>

    
  );
}

export default App;
