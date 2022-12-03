import React, {useEffect, useRef, useState} from 'react';
import {sendGet} from "../../API/PostService";
import HotelItems from "../../components/UI/HotelItems/HotelItems";
import SearchHeader from "../../components/UI/SearchHeader/SearchHeader";
import Sidebar from "../../components/UI/Sidebar/Sidebar";

const fetchPosts = async () => {
	try{
		const {data} = await sendGet('http://localhost:8080/hotel/list')
		return data
	} catch (error){
		console.log(error)
		throw error
	}
}

const HotelList = () => {
	
	const [menuState, setMenuState] = useState(false)
	const [hotels, setHotels] = useState([])
	const [searchQuery, setSearchQuery] = useState('')
	let allHotels = useRef(null);

	
	useEffect(() =>{
		console.log("Render")
		fetchPosts().then(d => {
			allHotels.current = d
			setHotels(d)})
	}, [])
	
	useEffect(() => {
		console.log("Hotels: ", hotels)
	}, [hotels])
	
		useEffect(() => {
		const sortedHotels = allHotels?.current?.filter(({hotel_name}) => hotel_name?.toLowerCase()?.includes(searchQuery?.toLowerCase()))
		sortedHotels ? setHotels(sortedHotels) : null;
	}, [searchQuery])
	
	const toggleSidebar = () => {
		menuState ? setMenuState(false) : setMenuState(true)
	}
	return (
		<div>
			<SearchHeader searchToggle={true} onInput={setSearchQuery} onOpen={toggleSidebar} title="Список отелей"/>
			<Sidebar menuState={menuState} toggleSlidebar={toggleSidebar}/>
			<HotelItems hotels={hotels}/>
		</div>
	);
};

export default HotelList;