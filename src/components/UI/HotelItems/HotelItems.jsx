import React from 'react';
import CreateButton from "../CreateButton/CreateButton";
import HotelListItem from "../HotelListItem/HotelListItem";
import classes from './HotelItems.module.css'

// eslint-disable-next-line react/prop-types
const HotelItems = ({hotels}) => {
	
	return (
		<div className={classes.main}>
			{/* eslint-disable-next-line react/prop-types */}
			{hotels?.length > 0
				// eslint-disable-next-line react/prop-types
			? hotels?.map(hotelData =>
					<HotelListItem key={hotelData.id} info={hotelData}/>)
			: <h1></h1>}
			<CreateButton href="/hcreate"/>
		</div>
	);
};

export default HotelItems;