import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import EmployeeDirectory from './components/EmployeeDirectory';
import Organization from './components/Organization';
import { employees } from './data/employee';
import Footer from './components/footer';
import './App.css'

function App() {
  return (
    <>
     <Header />
     <main>
      <Routes>
        <Route path="/employees" element={<EmployeeDirectory employeeData={employees} />} />
        <Route path="/organization" element={<Organization />} />
      </Routes>
     </main>
     <Footer />
    </>
  )
}

export default App
