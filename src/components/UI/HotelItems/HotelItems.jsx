import React from 'react';
import CreateButton from "../CreateButton/CreateButton";
import HotelListItem from "../HotelListItem/HotelListItem";
import classes from './HotelItems.module.css'

const HotelItems = (hotels) => {
	
	console.log(hotels)
	return (
		<div className={classes.main}>
			{hotels.length > 0
			? hotels?.map(hotelData =>
					<HotelListItem key={hotelData.id} info={hotelData}/>)
				: null}
			
			<CreateButton/>
		</div>
	);
};

export default HotelItems;