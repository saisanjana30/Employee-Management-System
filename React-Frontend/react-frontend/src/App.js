import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import EmployeeListComponent from './components/EmployeeListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import GetEmployeeComponent from './components/GetEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>

        <div className="container">
          <Routes>
            <Route path="/" element = { <EmployeeListComponent/> }></Route>
            <Route path="/employees" element ={ <EmployeeListComponent/> }/>
            <Route path="/add-employee" element ={ <AddEmployeeComponent/> }/>
            <Route path="/edit-employee/:id" element ={ <AddEmployeeComponent/> }/>
          </Routes>
        </div>
        
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
