import axios from "axios";
import Employee from "../model/employee";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees"

class EmployeeService {
    EmployeeService() {

    }
    saveEmployee(employee: Employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    listOfEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    deleteEmployee(id: number) {
        return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
    }

    getEmployee(id: number | null) {
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
    }

    updateEmployee(id: number | null, employee: Employee) {
        return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
    }
}

export default new EmployeeService();