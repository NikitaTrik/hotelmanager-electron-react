import React from 'react';
import classes from './HotelListItem.module.css'
import locations from './location.svg';
import inf from './info.svg';
import union from './union.svg';
// import { PropTypes } from "prop-types";
// eslint-disable-next-line react/prop-types
const HotelListItem = ({info}) => {
	// eslint-disable-next-line react/prop-types
	
	
	return (
			<div className={classes.item}>
				{/* eslint-disable-next-line react/prop-types */}
				<h2 className={classes.title}>{info['hotel_name']}</h2>
				<div className={classes.wrapper}>
					<img src={locations} alt="location"/>
					<div className={classes.addr}>
						{/* eslint-disable-next-line react/prop-types */}
						<div className={classes.town}>{info.location}</div>
						{/* eslint-disable-next-line react/prop-types */}
						<div className={classes.phone}>{info['hotel_number']}</div>
					</div>
					<img src={union} alt="info"/>
					<div className={classes.about}>
						{/* eslint-disable-next-line react/prop-types */}
						<div className={classes.name}>{info.Worker.name}</div>
						{/* eslint-disable-next-line react/prop-types */}
						<div className={classes.email}>{info.Worker.email}</div>
						{/* eslint-disable-next-line react/prop-types */}
						<div className={classes.ph}>{info.Worker.number}</div>
					</div>
					<img src={inf} alt="info"/>
					<div className={classes.descr}>
						<div className={classes.text}>
							{/* eslint-disable-next-line react/prop-types */}
							{info['hotel_description']}
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