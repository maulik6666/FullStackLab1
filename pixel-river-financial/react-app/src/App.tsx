import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import EmployeeDirectory from './components/EmployeeDirectory';
import Organization from './components/Organization';
import Footer from './components/footer';
import './App.css'
import './index.css'
import { SignedIn, SignedOut, SignIn }  from '@clerk/clerk-react';

function App() {
  return (
    <>
     <Header />
     <main>
      <SignedOut>
        <h2>Please Sign In to access Pixell River People Hub</h2>
        <SignIn />
      </SignedOut>

      <SignedIn>
        <h1>Welcome to Pixell River People Hub</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/employees" replace />} />
        <Route path="/employees" element={<EmployeeDirectory />} />
        <Route path="/organization" element={<Organization />} />
      </Routes>
       </SignedIn>
     </main>
     <Footer />
    </>
  )
}

export default App
