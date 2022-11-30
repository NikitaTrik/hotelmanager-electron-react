import React from 'react';
import classes from "./SearchInput.module.css"
import search from './search.svg'
const SearchInput = () => {
	return (
		<div className={classes.wrapper}>
			<img src={search} alt="search"/>
			<div className={classes.inputWrapper}><input placeholder="найти" type="text"/></div>
		</div>
	);
};

export default SearchInput;