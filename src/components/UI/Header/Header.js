import styles from './Header.module.scss';

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Link to='/'>
					<div className={styles.logo}>
						<img src='./logo.png' alt='' />
					</div>
				</Link>
				<div className={styles.nav}>
					<ul>
						<NavLink to='/' className={navData => navData.isActive ? styles.active : '' }>
							<li>Home</li>
						</NavLink>
						<NavLink to='/vote' className={navData => navData.isActive ? styles.active : '' }>
							<li>Vote</li>
						</NavLink>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
