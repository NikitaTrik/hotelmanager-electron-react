import classNames from "classnames";
import React from 'react';
import {Link} from "react-router-dom";
import classes from './ConfrimWindow.module.css'
// eslint-disable-next-line react/prop-types
const ConfirmWindow = ({windowState, windowToggle, data, sendFunction}) => {
	return (
		<div className={classNames(classes.main, windowState ? classes.active : null)}>
			<div className={classNames(classes.form, windowState ? classes.active : null)}>
				<div className={classes.title}>Подтвердите создание</div>
				<div className={classes.buttons}>
					<button onClick={() => windowToggle(false)} className={classes.button}>Отмена</button>
					<button onClick={() => {
						sendFunction(data)
						console.log('data sent', data)
					}} className={classes.button}><Link style={{height: '100%', width: '100%', lineHeight: '54px'}} to='/'>Продолжить</Link></button>
				</div>
			</div>
		</div>
	);
};

export default ConfirmWindow;