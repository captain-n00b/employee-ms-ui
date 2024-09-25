import React, { useEffect, useState } from 'react'
import Employee from '../model/employee';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router';

const EmployeeListBody = (props: any) => {
    const navigate = useNavigate();
    const editEmployee= (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: number) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    }
    return (
      <tr>
        <td className="text-left text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
          {props.employee.firstName}
        </td>
        <td className="text-left text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
          {props.employee.lastName}
        </td>
        <td className="text-left text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
          {props.employee.emailId}
        </td>
        <td className="text-left text-sm px-6 py-4 whitespace-nowrap hover:cursor-pointer">
          <a onClick={(e) => editEmployee(e, props.employee.id)} href="#" className="text-indigo-600 hover:text-indigo-800 px-4">
            Edit
          </a>
          <a onClick={(e) => props.deleteEmployee(e, props.employee.id)} href="#" className="text-indigo-600 hover:text-indigo-800 px-4">
            Delete
          </a>
        </td>
      </tr>
    );
  };

export default EmployeeListBody