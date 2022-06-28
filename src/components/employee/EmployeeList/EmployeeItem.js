import Button from '../../UI/Button';
import { employeeActions } from '../../../store/employee-slice';
import styles from './EmployeeItem.module.scss';
import Alert from '../../UI/Alert/Alert';

import { useDispatch, } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const EmployeeItem = (props) => {
	const {	id,	username, userPicture, firstName, lastName,	job, email	} = props;
	const [showAlert, setShowAlert] = useState(false);
	const dispatch = useDispatch();

	const votehandler = () => {
		dispatch(employeeActions.increaseEmployeeVote(id));
		setShowAlert(true);
	};

	return (
		<>
			{
				showAlert && <Alert message={`Voted for ${firstName}`} setIsVisible={setShowAlert} /> 
			}

			<div className={styles.itemContainer}>
				<Link to={`/employee/${username}`}>
					<div role='button' className={styles.itemTopside}>
						<div className={styles.itemImg}>
							<img src={userPicture} alt={id} />
						</div>
					</div>
				</Link>

				<div className={styles.itemBottomside}>
					<h4 className={`${styles.userFullname} ${styles.threeDot}`}>
						{firstName} {lastName}
					</h4>
					<h6 className={`${styles.userInfos} ${styles.threeDot}`}>
						{job}
					</h6>

					<p className={`${styles.userInfos} ${styles.threeDot}`}>
						{email}
					</p>

					<Button
						type='button'
						className={styles.voteButton}
						onClick={votehandler}
					>
						Vote
					</Button>
				</div>
			</div>
		</>
	);
};

export default EmployeeItem;
