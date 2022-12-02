import React from 'react';
import classes from "./SearchInput.module.css"
import search from './search.svg'
// eslint-disable-next-line react/prop-types
const SearchInput = ({onInput}) => {
	return (
		<div className={classes.wrapper}>
			<img src={search} alt="search"/>
			<div className={classes.inputWrapper}><input placeholder="найти" type="text" onChange={(e) => onInput(e.target.value)}/></div>
		</div>
	);
};

export default SearchInput;