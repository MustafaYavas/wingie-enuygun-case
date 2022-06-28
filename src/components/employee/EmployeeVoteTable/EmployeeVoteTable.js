import styles from './EmployeeVoteTable.module.scss';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const EmployeeVoteTable = () => {
    const employeeState = useSelector((state) => state.employee);

    return (
        <div className={styles.voteTableContainer}>
            <h4 className={styles.mainTitle}>Employee of the Month</h4>
            <div className={styles.listContent}>
                {employeeState.sortedEmployees.map((employee, i) => (
                    <Link key={employee.login.uuid} to={`/employee/${employee.login.username}`}>
                        <div
                            className={`${
                                (i === 0 && styles.firstNum) ||
                                (i === 1 && styles.secondNum) ||
                                (i === 2 && styles.thirdNum)}
                                ${styles.listItem}`}
                            key={employee.login.uuid}
                         >

                            <div className={styles.number}>{i + 1}</div>

                            <div className={styles.userImg}>
                                <img src={employee.picture.large} alt={employee.login.uuid} />
                            </div>

                            <div className={styles.userInfo}>
                                <p className={styles.title}>
                                    {employee.name.first} {employee.name.last}
                                </p>
                                <p className={styles.title}>{employee.job.title}</p>
                            </div>

                            <div className={styles.userVoteCount}>
                                    <p className={styles.voteCountText}>{employee.vote}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>        
        
    );
};

export default EmployeeVoteTable;
