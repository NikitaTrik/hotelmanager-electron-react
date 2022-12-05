import axios from "axios";
import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {sendGet} from "../../API/PostService";
import ConfirmWindow from "../../components/UI/ConfirmWindow/ConfirmWindow";
import CreateButton from "../../components/UI/CreateButton/CreateButton";
import CreateForm from "../../components/UI/CreateForm/CreateForm";
import InfoDisplay from "../../components/UI/InfoDisplay/InfoDisplay";
import SearchHeader from "../../components/UI/SearchHeader/SearchHeader";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import classes from "../HotelCreate/HotelCreate.module.css";

const HotelEdit = () => {
	const {data} = useLocation().state
	const sendHotelData = () => {
		axios.put(`http://localhost:8080/hotel/${data.id}`, formsData)
	}
	
	const deleteHotel = () => axios.delete(`http://localhost:8080/hotel/${data.id}`).then(() => redirect('/'))
	const fetchPosts = async (url) => {
		try{
			const {data} = await sendGet(url)
			return data
		} catch (error){
			console.log(error)
			throw error
		}
	}
	const redirect = useNavigate()
	const [locations, setLocations] = useState([])
	const [workers, setWorkers] = useState([])
	const [choosed, setChoosed] = useState({label: data.Worker.name, value: data.Worker.name})
	const [confirmWindow, setConfirmWindow] = useState(false)
	const [formsData, setFormsData] = useState({
		'hotel_name': data.hotel_name,
		'location_id': locations?.find(item => item.location===data.location)?.id,
		'hotel_number': data.hotel_number,
		'worker_id': workers?.find(item => item.name===data.Worker.name)?.id,
		'hotel_description': data.hotel_description
	})
	useEffect(() => {
		fetchPosts('http://localhost:8080/utility/locations').then(d => setLocations(d))
		fetchPosts('http://localhost:8080/utility/workers').then(d => setWorkers(d))
	}, [])
	const [menuState, setMenuState] = useState(false)
	const toggleSidebar = () => {
		menuState ? setMenuState(false) : setMenuState(true)
	}
	
	return (
		<div>
			<SearchHeader title="Карточка отеля" searchToggle={false} onOpen={toggleSidebar}/>
			<Sidebar menuState={menuState} toggleSlidebar={toggleSidebar}/>
			<div className={classes.wrapper}>
				<CreateForm sendFunc={sendHotelData} type='edit' setData={setFormsData} value={choosed} setValue={setChoosed} workers={workers} locations={locations}/>
				<InfoDisplay title='О персонале' data={data.Worker}/>
				<CreateButton btnText="Удалить" onEvent={setConfirmWindow} className={true} type="submit"/>
				<ConfirmWindow  text="удаление" data={formsData} sendFunction={deleteHotel} windowToggle={setConfirmWindow} windowState={confirmWindow}/>
			</div>
		
		</div>
	);
};



export default HotelEdit;