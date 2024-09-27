import React, { useState } from 'react'
// import Employee from '../model/employee';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router';
import ErrorField from './ErrorField';
const AddEmployee = () => {
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Please check the field");
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        id: null,
        firstName: "",
        lastName: "",
        emailId: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {
        const value: string = e.target.value;
        setEmployee({...employee, [e.target.name]: value});
    }

    const saveEmployee = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        await EmployeeService.saveEmployee(employee).then((response) =>{
            console.log(response);
            navigate("/EmployeeList");
        }).catch((error) => {
            console.error(error);
            setIsError(true);
            setErrorMessage(error.response.data.errorMessage);
        });
    }

    const clearEmployee = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setEmployee({
            id: null,
            firstName: "",
            lastName: "",
            emailId: ""
        });
    }
  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Add New Employee</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-500 text-sm font-normal">
                    First Name
                </label>
                <input type='text' name='firstName' value={employee.firstName} onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-500 text-sm font-normal">
                    Last Name
                </label>
                <input type='text' name='lastName' value={employee.lastName} onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-500 text-sm font-normal">
                    Email
                </label>
                <input type='email' name='emailId' value={employee.emailId} onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                <button onClick={(e) => saveEmployee(e)} className='rounded text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-700'>
                    Save
                </button>
                <button onClick={(e) => clearEmployee(e)} className='rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-700'>
                    Clear
                </button>
            </div>
            {isError ? <ErrorField message={errorMessage}/> : undefined}
        </div>
    </div>
  )
}

export default AddEmployee