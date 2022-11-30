import React, {useEffect, useState} from 'react';
import {sendGet} from "../../API/PostService";
import HotelItems from "../../components/UI/HotelItems/HotelItems";
import SearchHeader from "../../components/UI/SearchHeader/SearchHeader";
import Sidebar from "../../components/UI/Sidebar/Sidebar";


const HotelList = () => {
	const HOTEL_LIST_URL = 'http://localhost:8080/hotel/list'
	const [menuState, setMenuState] = useState(false)
	const [hotels, setHotels] = useState([])
	
	const fetchPosts = async () => {
		const data = await sendGet(HOTEL_LIST_URL)
		return data
	
	}
	useEffect(() =>{
		fetchPosts().then(setHotels)
	}, [])
	
	const toggleSidebar = () => {
		menuState ? setMenuState(false) : setMenuState(true)
	}
	
	return (
		<div>
			<SearchHeader onOpen={toggleSidebar} title="Список отелей"/>
			<Sidebar menuState={menuState} toggleSlidebar={toggleSidebar}/>
			<HotelItems hotels={hotels}/>
		</div>
	);
};

export default HotelList;