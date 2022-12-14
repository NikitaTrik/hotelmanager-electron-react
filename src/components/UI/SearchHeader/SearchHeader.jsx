import React from 'react';
import SearchInput from "../SearchInput/SearchInput";
import classes from "./SearchHeader.module.css";
import menu from "./menu.svg";

// eslint-disable-next-line react/prop-types
const SearchHeader = ({title, onOpen, onInput, searchToggle}) => {
	return (
		<div className={classes.main}>
			<div className={classes.wrapper}>
				<div className={classes.title}>
					<img onClick={onOpen} src={menu} alt="menu"/>
					<h2>{title}</h2>
				</div>
				{searchToggle
				? <SearchInput onInput={onInput}/>
				: null}
			</div>
		</div>
	);
};

export default SearchHeader;