import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EmployeeDetail = () => {
    const {username} = useParams();
    const employees = useSelector(state => state.employee).employees;


    useEffect(() => {
        const selectedEmployee = employees.find(employee => employee.login.username === username)
    }, [employees, username])

    return (
        <>
            
        </>
    )
}

export default EmployeeDetail;