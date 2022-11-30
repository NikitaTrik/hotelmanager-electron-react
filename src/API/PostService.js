import axios from "axios";

export async function sendGet(url){
	const response = await axios.get(url)
	return response.data
}