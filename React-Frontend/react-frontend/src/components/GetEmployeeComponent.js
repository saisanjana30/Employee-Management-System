import React,{useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const GetEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [employees, setEmployees] = useState([]);
    const history = useNavigate();

    useEffect(() => {
        GetEmployee();
    }, [])

     const GetEmployee= (employee) => {
        
        EmployeeService.getEmployeeById(employee.id).then((response) =>{
            setEmployees(response.data);
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
            return response.data;
        }).catch(error => {
            console.log(error)
        })
    }

   return (
    <div>
        <form>
            <div class="container">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                    <th> Employee Id </th>
                    <th> Employee First Name </th>
                    <th> Employee Last Name </th>
                    <th> Employee Email Id </th>
                    <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                            
                    <tr>
                        <td>
                        <Link to={`/employee`} className="btn btn-info">Back</Link>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </form>
    </div>
  )
}

export default GetEmployeeComponent
