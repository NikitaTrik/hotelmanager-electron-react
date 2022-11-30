import React from 'react';
import classes from './HotelListItem.module.css'
import locations from './location.svg';
import inf from './info.svg';
import union from './union.svg';
// import { PropTypes } from "prop-types";
// eslint-disable-next-line react/prop-types
const HotelListItem = ({info}) => {
	// eslint-disable-next-line react/prop-types
	const {hotelName, location, hotelNumber, hotelDescription, Worker} = info
	// eslint-disable-next-line react/prop-types
	const {name, email, number} = Worker
	return (
			<div className={classes.item}>
				<h2 className={classes.title}>{hotelName}</h2>
				<div className={classes.wrapper}>
					<img src={locations} alt="location"/>
					<div className={classes.addr}>
						<div className={classes.town}>{location}</div>
						<div className={classes.phone}>{hotelNumber}</div>
					</div>
					<img src={union} alt="info"/>
					<div className={classes.about}>
						<div className={classes.name}>{name}</div>
						<div className={classes.email}>{email}</div>
						<div className={classes.ph}>{number}</div>
					</div>
					<img src={inf} alt="info"/>
					<div className={classes.descr}>
						<div className={classes.text}>
							{hotelDescription}
						</div>
					</div>
				</div>
			</div>
	);
};

// HotelItems.propTypes = {
// 	hotelName: PropTypes.string,
// 	hotelPhone: PropTypes.string,
// 	hotelEmail: PropTypes.string,
// 	info: PropTypes.object,
// }
export default HotelListItem;