import React, { useEffect, useState } from "react";
import Employee from "../model/employee";
import EmployeeService from "../services/EmployeeService";
import { error } from "console";
import { useNavigate } from "react-router";
import EmployeeListBody from "./EmployeeListBody";

function EmployeeList() {
  const [listOfEmployee, setListOfEmployee] = useState<Employee[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    EmployeeService.listOfEmployees()
      .then((response) => {
        setListOfEmployee(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteEmployee = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: number
  ) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((response) => {
        if(listOfEmployee) {
            setListOfEmployee((prevElement) => {
                return prevElement?.filter((employee) => employee.id != id);
            })
        }
    })
  };

  const navigate = useNavigate();
  return (
    <div className="mx-auto my-6 container">
      <div className="h-12 mb-4">
        <button
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
          onClick={(e) => navigate("/addEmployee")}
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email ID
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {listOfEmployee?.map((employee) => (
                <EmployeeListBody
                  employee={employee}
                  key={employee.id}
                  deleteEmployee={deleteEmployee}
                ></EmployeeListBody>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
export default EmployeeList;
