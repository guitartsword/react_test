import 'whatwg-fetch'

export default class requests{
    constructor(baseUrl, proxyUrl='', headers={}){
        this.headers = headers
        this.proxyUrl = proxyUrl;
        this.baseUrl = baseUrl;
    }
    /**
     * see whatwg-fetch documentation
     * 
     * fetch(url, options);
     * 
     * @param {string} url 
     * @param {object} options 
     * @returns {Promise} return fetch(url, options)
     */
    fetch(url, options){
        return fetch(url, options);
    }
    /**
     * GET HTTP method -> Example:
     * 
     * requests.get('myapi.com/v1/students', {Authorization: 'Basic user:password'})
     * @param {string} url - url string to GET
     * @param {object} headers - an object of the headers key, value, defaults as empty object
     * @return {promise} returns error only if network failure. see: whatwg-fetch 
     */
    get(url, headers={}){
        url = this.proxyUrl + this.baseUrl + url;
        console.log(Object.assign(headers, this.headers))
        return fetch(url, {
            headers: Object.assign(headers, this.headers),
            method: 'GET'
        });
    }
    /**
     * POST HTTP method -> Example:
     * 
     * requests.get('myapi.com/v1/students', {Authorization: 'Basic user:password'})
     * @param {string} url - url string to GET
     * @param {object} payload - an object that will be send in the body as json
     * @param {object} header - an object of the headers key, value, defaults as empty object
     * @returns {promise} returns error only if network failure or invalid payload. see: whatwg-fetch 
     */
    post(url, payload, headers={}){
        url = this.proxyUrl + this.baseUrl + url;
        headers['Content-Type'] = 'appliaction/json';
        let jsonString;
       
        try {
            jsonString = JSON.stringify(payload);    
        } catch (error) {
            return new Promise((success, reject)=>{
                reject('Invalid Payload')
            });
        }
        return fetch(url, {
            headers: Object.assign(headers, this.headers),
            method: 'POST',
            body: jsonString
        });
    }
    /**
     * PUT HTTP method -> Example:
     * 
     * requests.get('myapi.com/v1/students', {Authorization: 'Basic user:password'})
     * @param {string} url - url string to GET
     * @param {object} payload - an object that will be send in the body as json
     * @param {object} header - an object of the headers key, value, defaults as empty object
     * @returns {promise} returns error only if network failure or invalid payload. see: whatwg-fetch 
     */
    put(url, payload, headers={}){
        url = this.proxyUrl + this.baseUrl + url;
        headers['Content-Type'] = 'appliaction/json';
        let jsonString;
        
        try {
            jsonString = JSON.stringify(payload);    
        } catch (error) {
            return new Promise((success, reject)=>{
                reject('Invalid Payload')
            });
        }
        return fetch(url, {
            headers: Object.assign(headers, this.headers),
            method: 'PUT',
            body: jsonString
        });
    }
}