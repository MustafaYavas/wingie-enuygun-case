import { fetchEmployeeData } from '../../store/employee-actions';
import EmployeeItem from './EmployeeItem';
import styles from './EmployeesList.module.scss'

import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';


const tasks = [
    'Team Lead',
    'Sr. Frontend Developer',
    'Jr. Frontend Developer',
    'Sr. Backend Developer',
    'Jr. Backend Developer',
    'Sr. Software Engineer',
    'Jr. Software Engineer',
    'Accounting manager',
    'r&d supervisor',
    'Marketin Manager',
    'HR Manager',
    'Sales Executive',
];

const EmployeeList = () => {
    const dispatch = useDispatch();
    const employeeState = useSelector(state => state.employee);

    useEffect(() => {
        dispatch(fetchEmployeeData());
    }, [dispatch])

    return (

            <div className={styles.listContainer}>
                {
                    employeeState.employees.map((employee, index) => (
                        <EmployeeItem 
                            key={employee.login.uuid}
                            id={employee.login.uuid}
                            username={employee.login.username}
                            userPicture={employee.picture.large}
                            firstName={employee.name.first}
                            lastName={employee.name.last}
                            job={tasks[index]}
                            email={employee.email}
                            phone={employee.phone}
                            vote={employee.vote}
                        />
                    ))
                }
            </div>

    )
}

export default EmployeeList;