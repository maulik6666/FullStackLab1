import Header from './components/Header';
import EmployeeDirectory from './components/EmployeeDirectory';
import OrganizationData from './components/Organization';
import { employees } from './data/employee';
import Footer from './components/footer';
import './App.css'

function App() {
  return (
    <>
     <Header />
     <main>
      <EmployeeDirectory employeeData={employees} />
      <OrganizationData />
     </main>
     <Footer />
    </>
  )
}

export default App
