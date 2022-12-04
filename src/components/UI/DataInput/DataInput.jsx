import React from 'react';
import classes from './DataInput.module.css'
// eslint-disable-next-line react/prop-types
const DataInput = ({text, value, onChange, disabled}) => {
	return (
		<input disabled={disabled} value={value} onChange={(e) => onChange(e.target.value)} required className={classes.main} type="text" placeholder={text}/>
	);
};

export default DataInput;