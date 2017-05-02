import 'whatwg-fetch'
const BASE_URL = 'https://iise-inscripciones-backend.herokuapp.com';
export default class iise{
	constructor() {
		this.value = 69;	
	}
	async getConferences(){
		console.log("fetching")
		let fetchPromise = fetch(BASE_URL + "/v1/conferences")
		let retVal;
		await fetchPromise
			.then((response) => {
				//console.dir(response)

				retVal = response.json();
			},(error) => {
				console.log("error")
				retVal = error;
			});
		console.log("end-fetching")
		return retVal
	}
	async getConference(id){
		let retVal;
		await fetch(BASE_URL + '/v1/conference/' + id)
			.then((response) => {
				retVal =response.json();
			}, (error) => {
				console.log('error')
				retVal = error
			});
		return retVal;
	}
}