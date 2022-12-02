import React, {useEffect, useState} from 'react';
import DataInput from "../DataInput/DataInput";
import DataSelect from "../DataSelect/DataSelect";
import DataTextArea from "../DataTextArea/DataTextArea";
import classes from './CreateForm.module.css';


// eslint-disable-next-line react/prop-types
const CreateForm = ({workers, locations, value, setValue, setData}) => {
	// eslint-disable-next-line react/prop-types
 const [height, setHeight] = useState(605)
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [description, setDescription] = useState('')
	const [town, setTown] = useState()
	const sendData = () => setData({
		'hotel_name': name,
		// eslint-disable-next-line react/prop-types
		'location_id': locations?.find(l => l?.location === town?.label)?.id,
		'hotel_number': phone,
		// eslint-disable-next-line react/prop-types
		'worker_id': workers?.find(w => w?.name === value?.label)?.id,
		'hotel_description': description,
	})
// eslint-disable-next-line react/prop-types
useEffect(() => {
	sendData()
}, [name, phone, description, value, town])
	return (
		
		<div style={{height: height}} className={classes.main}>
			<h2>Об отеле</h2>
			<div className={classes.wrapper}>
				<DataInput value={name} onChange={setName} text="Название отеля"/>
				<DataSelect value={town} setValue={setTown} options={locations} onOpen={setHeight} onClose={setHeight} placeholder="Регион расположения отеля"/>
				<DataInput value={phone} onChange={setPhone} text="Контактный телефон"/>
				<DataSelect value={value} setValue={setValue} options={workers} onOpen={setHeight} onClose={setHeight} placeholder="ФИО менеджера"/>
				<DataTextArea value={description} onChange={setDescription} placeholder="Описание отеля "/>
			</div>
			
		</div>
	);
};

export default CreateForm;