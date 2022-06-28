import styles from './HomePage.module.scss';

import React from 'react';

const HomePage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}></div>
			<h1 className={styles.title}>Wingie Enuygun</h1>
			<h2 className={styles.subTitle}>welcome</h2>
		</div>
	);
};

export default HomePage;
