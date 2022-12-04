import classNames from "classnames";
import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import DataInput from "../DataInput/DataInput";
import DataSelect from "../DataSelect/DataSelect";
import DataTextArea from "../DataTextArea/DataTextArea";
import classes from './CreateForm.module.css';
import done from './done.svg';
import edit from './edit.svg';

// eslint-disable-next-line react/prop-types
const CreateForm = ({sendFunc, workers, locations, value, setValue, setData, type}) => {
	// eslint-disable-next-line react/prop-types
	const {data} = useLocation().state || {data: 0}
  const [height, setHeight] = useState(605)
	const [name, setName] = useState(type === 'edit' ? data.hotel_name : '')
	const [phone, setPhone] = useState(type === 'edit' ? data.hotel_number : '')
	const [description, setDescription] = useState(type === 'edit' ? data.hotel_description : '')
	const [town, setTown] = useState(type === 'edit' ? {label: data.location, value: data.location} : null)
	const [editStatus, setEditStatus] = useState(false)
	const sendData = () => setData({
		'hotel_name': name,
		// eslint-disable-next-line react/prop-types
		'location_id': locations?.find(l => l?.location === town?.label)?.id,
		'hotel_number': phone,
		// eslint-disable-next-line react/prop-types
		'worker_id': workers?.find(w => w?.name === value?.label)?.id,
		'hotel_description': description,
	})
	const toggleEditStatus = () => {
		// eslint-disable-next-line no-mixed-spaces-and-tabs
		if (editStatus){
			setEditStatus(false)
			sendFunc()
		} else {
			setEditStatus(true)
		}
	}
	

	
// eslint-disable-next-line react/prop-types
useEffect(() => {
	sendData()
}, [name, phone, description, value, town])
	return (
		type === 'create' ?
			<div style={{height: height}} className={classes.main}>
				<h2>Об отеле</h2>
				<div className={classes.wrapper}>
					<DataInput disabled={false} value={name} onChange={setName} text="Название отеля"/>
					<DataSelect value={town} setValue={setTown} options={locations} onOpen={setHeight} onClose={setHeight} placeholder="Регион расположения отеля"/>
					<DataInput disabled={false} value={phone} onChange={setPhone} text="Контактный телефон"/>
					<DataSelect value={value} setValue={setValue} options={workers} onOpen={setHeight} onClose={setHeight} placeholder="ФИО менеджера"/>
					<DataTextArea value={description} onChange={setDescription} placeholder="Описание отеля "/>
				</div>
			</div>
			: <div style={{height: height}} className={classes.main}>
				<h2>Об отеле</h2>
				<img className={classes.editBtn} onClick={() => toggleEditStatus()} src={editStatus ? done : edit} alt="editBtn"/>
				<div className={classes.wrapper}>
					
					<div className={classNames(classes.block, editStatus ? classes.hide : null)}></div>
					<DataInput disabled={false} value={name} onChange={setName} text="Название отеля"/>
					<DataSelect def={data.location} value={town} setValue={setTown} options={locations} onOpen={setHeight} onClose={setHeight} placeholder={data.location}/>
					<DataInput disabled={false} value={phone} onChange={setPhone} text="Контактный телефон"/>
					<DataSelect def={data.Worker.name} value={value} setValue={setValue} options={workers} onOpen={setHeight} onClose={setHeight} placeholder={data.Worker.name}/>
					<DataTextArea value={description} onChange={setDescription} placeholder="Описание отеля "/>
				</div>
			</div>
	);
};

export default CreateForm;