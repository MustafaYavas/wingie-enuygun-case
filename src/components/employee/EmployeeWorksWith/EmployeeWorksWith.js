import React from 'react';
import styles from './EmployeeWorksWith.module.scss';

const EmployeeWorksWith = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<img src={props.image} alt='' />
			</div>
			<p className={styles.fullname}>{props.name}</p>
		</div>
	);
};

export default EmployeeWorksWith;