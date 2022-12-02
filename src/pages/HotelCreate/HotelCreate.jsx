import axios from "axios";
import React, {useEffect, useState} from 'react';
import {sendGet} from "../../API/PostService";
import ConfirmWindow from "../../components/UI/ConfirmWindow/ConfirmWindow";
import CreateButton from "../../components/UI/CreateButton/CreateButton";
import CreateForm from "../../components/UI/CreateForm/CreateForm";
import InfoDisplay from "../../components/UI/InfoDisplay/InfoDisplay";
import SearchHeader from "../../components/UI/SearchHeader/SearchHeader";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import classes from "./HotelCreate.module.css";

const HotelCreate = () => {
	const sendHotelData = (data) => {
		axios.post('http://localhost:8080/hotel', data)
	}
	const fetchPosts = async (url) => {
		try{
			const {data} = await sendGet(url)
			return data
		} catch (error){
			console.log(error)
			throw error
		}
	}
	const [locations, setLocations] = useState([])
	const [workers, setWorkers] = useState([])
	const [choosed, setChoosed] = useState()
	const [confirmWindow, setConfirmWindow] = useState(false)
	const [formsData, setFormsData] = useState({
		'hotel_name': '',
		'location_id': '',
		'hotel_number': '',
		'worker_id': '',
		'hotel_description': ''
	})
	useEffect(() => {
		fetchPosts('http://localhost:8080/utility/locations').then(d => setLocations(d))
		fetchPosts('http://localhost:8080/utility/workers').then(d => setWorkers(d))
	}, [])
	const [menuState, setMenuState] = useState(false)
	const toggleSidebar = () => {
		menuState ? setMenuState(false) : setMenuState(true)
	}
	const data = workers?.find(item => item.name===choosed?.label)
	
	return (
		<div>
			<SearchHeader title="Создание карточки отеля" searchToggle={false} onOpen={toggleSidebar}/>
			<Sidebar menuState={menuState} toggleSlidebar={toggleSidebar}/>
			<div className={classes.wrapper}>
				<CreateForm setData={setFormsData} value={choosed} setValue={setChoosed} workers={workers} locations={locations}/>
				<InfoDisplay title='О персонале' data={data}/>
				<CreateButton onEvent={setConfirmWindow} className={true} type="submit"/>
				<ConfirmWindow data={formsData} sendFunction={sendHotelData} windowToggle={setConfirmWindow} windowState={confirmWindow}/>
			</div>
			
		</div>
	);
};

export default HotelCreate;