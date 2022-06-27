import { employeeActions } from './employee-slice';

export const fetchEmployeeData = () => {
    return async(dispatch) => {
        const fetchData = async () => {
            const employees = [];
            for(let i=0; i<12; i++) {
                const response = await fetch('https://randomuser.me/api/');
                if(!response.ok) {
                    throw new Error('fetching employee data failed!');
                }
                const data = await response.json();
                employees.push({...data.results[0], 'vote': 0})
            }
            
            return employees;
        }

        try {
            const employeeData = await fetchData();
            dispatch(employeeActions.getEmployees(employeeData || []));
        } catch (error) {
            console.log(error);
        }
    }
}