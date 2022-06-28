import { employeeActions } from './employee-slice';

const jobs = [
    {title: 'Backend Developer', abilities: ['Database Management', 'SOLID Principles', 'Design Patterns']},
    {title: 'Frontend Developer', abilities: ['Cross-browser and device testing', 'Web performance optimization', 'Search engine optimization ']},
    {title: 'Cyber Security Specialist', abilities: ['Network Security', 'Security Testing', 'Product Infrastructure']},
    {title: 'Product Manager',  abilities: ['Understanding Of Web Development', 'User Experience Best Practices', 'Time Management']},
    {title: 'Human Resources',  abilities: ['Communication Skills', 'Administrative Expert', 'HRM Knowledge and Expertise']}
]

export const fetchEmployeeData = () => {
    return async(dispatch) => {
        const fetchData = async () => {
            const employees = [];
            for(let i=0; i<9; i++) {
                const response = await fetch('https://randomuser.me/api/');
                if(!response.ok) {
                    throw new Error('fetching employee data failed!');
                }
                const data = await response.json();
                employees.push({...data.results[0], 'vote': 0,  job: jobs[Math.floor((Math.random() * 5))]})
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