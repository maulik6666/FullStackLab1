import Header from './components/Header';
import EmployeeDirectory from './components/EmployeeDirectory';
import './App.css'
import { employees } from './data/employee';

function App() {
  return (
    <>
     <Header />
     <main>
      <EmployeeDirectory employeeData={employees} />
     </main>
    </>
  )
}

export default App
