import EmployeesList from '../components/employee/EmployeesList';
import EmployeeVoteTable from '../components/employee/EmployeeVoteTable';

import styles from './Employees.module.scss'

const Employees = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <EmployeesList />
                <EmployeeVoteTable />
            </div>
        </div>
    )
}

export default Employees;