import styles from './EmployeeDetail.module.scss';
import EmployeeWorksWith from '../EmployeeWorksWith/EmployeeWorksWith';
import EmployeeDetailInfos from './EmployeeDetailInfos'

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiPhoneCall, FiHome, FiMail } from 'react-icons/fi';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { AiFillLinkedin, AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';
import { GiMoebiusStar,	GiKnockedOutStars, GiDrippingStar} from 'react-icons/gi';

const EmployeeDetail = () => {
	const { username } = useParams();
	const employees = useSelector((state) => state.employee).employees;
	const [currentEmployee, setCurrentEmployee] = useState(null);
	const [otherEmployees, setOtherEmployees] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const selectedEmployee = employees.find((employee) => employee.login.username === username);
		setCurrentEmployee(selectedEmployee);
		setOtherEmployees(employees.filter(employee => employee.login.uuid !== selectedEmployee.login.uuid))
	}, [username, employees]);

	const goBackHandler = () => {
		navigate(-1, { replace: true });
	}

	return (
		currentEmployee && (
			<div className={styles.container}>
				<div className={`${styles.content} ${styles.common}`}>
					<div className={styles.goBack} onClick={goBackHandler}>
						<FaLongArrowAltLeft/>
					</div>

					<div className={styles.cardTopside}>
						<img
							src='https://source.unsplash.com/1600x900/?landscape'
							alt='landscape'
						/>
					</div>
					
					<div className={styles.cardBottomside}>
						<div className={styles.employeeProfile}>
							<img
								src={currentEmployee.picture.large}
								alt={currentEmployee.first}
							/>
						</div>
						<div className={styles.employeeInfos}>
							<p className={styles.fullname}>
								{currentEmployee.name.first}
							</p>
							<p className={styles.job}>{currentEmployee.job.title}</p>
						</div>

						<div className={styles.employeeDetail}>

							<div className={styles.sides}>
								<div className={styles.employeeItem}>
									<EmployeeDetailInfos icon={<FiMail />} text={currentEmployee.email} />
								</div>

								<div className={styles.employeeItem}>
									<EmployeeDetailInfos icon={<FiPhoneCall />} text={currentEmployee.phone} />
								</div>

								<div className={styles.employeeItem}>
									<EmployeeDetailInfos icon={<FiHome />} text={currentEmployee.email} />
								</div>
							</div>

							<div className={styles.middle}>
								<div className={`${styles.social} ${styles.twitter}`}>
									<AiOutlineTwitter />
								</div>

								<div className={`${styles.social} ${styles.linkedin}`}>
									<AiFillLinkedin />
								</div>

								<div className={`${styles.social} ${styles.github}`}>
									<AiFillGithub />
								</div>
							</div>

							<div className={`${styles.sides} ${styles.rightAlign}`}>
								<div className={styles.employeeItem}>
									<EmployeeDetailInfos icon={<GiMoebiusStar />} text={currentEmployee.job.abilities[0]} />
								</div>

								<div className={styles.employeeItem}>
									<EmployeeDetailInfos icon={<GiKnockedOutStars />} text={currentEmployee.job.abilities[1]} />
								</div>

								<div className={styles.employeeItem}>
									<EmployeeDetailInfos icon={<GiDrippingStar />} text={currentEmployee.job.abilities[2]} />
								</div>
							</div>

						</div>
					</div>
				</div>
				
				<div className={`${styles.worksWith} ${styles.common}`}>
					<h2 className={styles.workTitle}>Works With...</h2>
					<div className={styles.allItems}>
						{
							otherEmployees.length > 0 && otherEmployees.map((employee) => (
								<EmployeeWorksWith  image={employee.picture.large} name={employee.name.first}/>
							))
						}
					</div>
				</div>
			</div>
		)
	);
};

export default EmployeeDetail;
