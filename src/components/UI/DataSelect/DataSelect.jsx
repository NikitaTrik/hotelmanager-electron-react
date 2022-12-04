import React from 'react';
import Select from "react-select";

// eslint-disable-next-line react/prop-types
const DataSelect = ({placeholder, onOpen, onClose, options, value, setValue}) => {
	return (
		// eslint-disable-next-line react/prop-types
		<Select value={value} onChange={(val) => setValue(val)} onMenuClose={() => options?.length>5 ? onClose(605) : null} onMenuOpen={() => options?.length>5 ? onOpen(680) : null} placeholder={placeholder} options={options?.length > 0
			// eslint-disable-next-line react/prop-types
			// eslint-disable-next-line react/prop-types
			? options?.map(item =>
				({value: item?.name || item?.location, label: item?.name || item?.location})
			) : null} styles={{
			control: (baseStyles) => ({
				...baseStyles,
				background: 'rgba(235, 235, 235, 0.93)',
				borderRadius: "5px",
				height: 54,
				marginTop: 20,
				color: "#000",
				paddingLeft: 12,
				fontFamily: "SF Pro Display",
				fontStyle: "normal",
				fontSize: 24,
				fontWeight: 400,
			}),
			placeholder: (baseStyles) => ({
				...baseStyles,
				color: "#000",
				fontFamily: "SF Pro Display",
				fontStyle: "normal",
				fontSize: 24,
				fontWeight: 400,
			}),
			option: (baseStyles) => ({
				...baseStyles,
				fontFamily: "SF Pro Display",
				fontStyle: "normal",
				fontSize: 24,
				fontWeight: 400,
			})
		}}
		/>
	);
};

export default DataSelect;