import classNames from "classnames";
import React from 'react';
import {Link} from "react-router-dom";
import classes from './CreateButton.module.css'
// eslint-disable-next-line react/prop-types
const CreateButton = ({href, type, className, onEvent}) => {
	return (
		type === 'submit' ? <div onClick={() => onEvent(true)} className={classNames(className ? classes.btnabs : null)}>Создать</div>
			: <div className={classes.main}><Link to={href}>Создать</Link></div>
	);
};

export default CreateButton;