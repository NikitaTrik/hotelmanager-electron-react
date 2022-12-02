import React from 'react';
import classes from './DataTextArea.module.css'
// eslint-disable-next-line react/prop-types
const DataTextArea = ({placeholder, value, onChange}) => {
	return (
		<textarea value={value} onChange={(e) => onChange(e.target.value)} className={classes.main} placeholder={placeholder} cols="30" rows="10">
		
		</textarea>
	);
};

export default DataTextArea;