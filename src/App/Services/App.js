import 'whatwg-fetch'
import requestClass from './Requests.js'
const BASE_URL = 'https://iise-inscripciones-backend.herokuapp.com';
const iiseFetch = new requestClass(BASE_URL);
const clashFetch = new requestClass('https://api.clashofclans.com/v1/clans', 'https://cors-anywhere.herokuapp.com/')
const secretClashKey='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjA3YWNmYzI3LTg2ZjktNDIyNC1iZTBiLTcwZWZmNzVjZjhlNCIsImlhdCI6MTQ5NzIyMjk4Mywic3ViIjoiZGV2ZWxvcGVyL2U0NDIwZTlmLTExMGYtNWNlNS04MGJkLWJlZDBhMWVmYjZjZSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4MS4yMTAuNDEuMTk1Il0sInR5cGUiOiJjbGllbnQifV19.2B7fhNxww3BxFIfKVUJu_3LLUhyBQnYY2afK3ihFUrj8AUobJLt_frt8DLB4Y-u8YNDD9aNeL7YmpCORjgt-WQ';
export default class iise{
	constructor() {
		this.value = 69;	
	}
	searchClan(searchOptions={}){
		
		let search = Object.keys(searchOptions).map((key) => {
			return key+'='+searchOptions[key];
		})
		const headers = {Authorization: `Bearer ${secretClashKey}`}
		return clashFetch
			.get('?' + search.join('&'), headers)
			.then(response => {return response.json()});
	}
	getConferences(){
		return iiseFetch
			.get('/v1/conferences')
			.then(response => {return response.json()});
	}
	getConference(id){
		return fetch(BASE_URL + '/v1/conference/' + id)
	}
}