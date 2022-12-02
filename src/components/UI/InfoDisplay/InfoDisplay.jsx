import React from 'react';
import classes from './InfoDisplay.module.css'
// eslint-disable-next-line react/prop-types
const InfoDisplay = ({title, data}) => {
	const defaultValues = ['Менеджер', 'ФИО менеджера', 'Номер телефона менеджера', 'Почта менеджера']
	return (
		<div className={classes.main}>
			<h2>{title}</h2>
			{/* eslint-disable-next-line react/prop-types */}
			{data ? Object.values(data).map(item => typeof item !== "number" ? <div className={classes.text} key={item}>{item === "worker" ? "Менеджер" : item}</div> : null) : defaultValues.map(item => <div className={classes.text} key={item}>{item}</div>)}
		</div>
	);
};

export default InfoDisplay;