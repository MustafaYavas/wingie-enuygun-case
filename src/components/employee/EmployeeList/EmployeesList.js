import EmployeeItem from './EmployeeItem';
import styles from './EmployeesList.module.scss'

import { useSelector } from 'react-redux';

const EmployeeList = () => {
    const employees = useSelector(state => state.employee).employees;
    
    return (

        <div className={styles.listContainer}>
            {
                employees.map(employee => (
                    <EmployeeItem 
                        key={employee.login.uuid}
                        id={employee.login.uuid}
                        username={employee.login.username}
                        userPicture={employee.picture.large}
                        firstName={employee.name.first}
                        lastName={employee.name.last}
                        job={employee.job.title}
                        email={employee.email}
                     />
                ))
            }
        </div>

    )
}

export default EmployeeList;