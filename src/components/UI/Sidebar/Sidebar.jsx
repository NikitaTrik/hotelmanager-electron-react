import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import {useOutsideClick} from "../../../hooks/useOutsideClick";
import classes from './Sidebar.module.css'


// eslint-disable-next-line react/prop-types
const Sidebar = ({menuState, toggleSlidebar}) => {
	const sideRef = useRef(null)
	const mainClasses = menuState ? `${classes.main} ${classes.active}` : `${classes.main}`
	useOutsideClick(sideRef, menuState, toggleSlidebar)
	return (
		<div ref={sideRef} className={mainClasses}>
			<h2 className={classes.title}>Меню</h2>
			<div className={classes.link}>
				<Link to='/'>Список контактов</Link>
			</div>
			<div className={classes.link}>
				<Link to='/'>Список клиентов</Link>
			</div>
			<div className={classes.link}>
				<Link to='/'>Список отелей</Link>
			</div>
			<div className={classes.link}>
				<Link to='/'>Список туров</Link>
			</div>
			<h3 className={classes.version}>version 2.0</h3>
		</div>
	);
};

export default Sidebar;