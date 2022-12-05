import classNames from "classnames";
import React from 'react';
import classes from './ConfrimWindow.module.css'
// eslint-disable-next-line react/prop-types
const ConfirmWindow = ({windowState, windowToggle, data, sendFunction, text}) => {
	return (
		<div className={classNames(classes.main, windowState ? classes.active : null)}>
			<div className={classNames(classes.form, windowState ? classes.active : null)}>
				<div className={classes.title}>Подтвердите {text}</div>
				<div className={classes.buttons}>
					<button onClick={() => windowToggle(false)} className={classes.button}>Отмена</button>
					<button onClick={() => {
						sendFunction(data)
						console.log('data sent', data)
					}} className={classes.button}>Продолжить</button>
				</div>
			</div>
		</div>
	);
};

export default ConfirmWindow;