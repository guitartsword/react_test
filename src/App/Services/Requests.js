import 'whatwg-fetch'

export default class requests{
    /**
     * 
     * @param {string} baseUrl - the base url this class will always send requests
     * @param {object} baseHeader - header that will always be
     *  sent in additional to new headers per request
     */
    constructor(baseUrl, baseHeaeder={}){
        this.header = baseHeaeder;
        this.baseUrl = baseUrl;
        if(typeof baseUrl === 'string')
            throw new TypeError('expected baseUrl to be string')
        if(typeof header === 'object')
            throw new TypeError('expected header to be object')
    }
    /**
     * see whatwg-fetch documentation
     * 
     * fetch(url, header);
     * 
     * @param {object} header 
     * @returns {Promise} return fetch(this.baseUrl, header)
     */
    fetch(header){
        Object.assign(header, this.header)
        return fetch(url, header);
    }
    /**
     * GET HTTP method -> Example:
     * 
     * requests.get('myapi.com/v1/students', {Authorization: 'Basic user:password'})
     * @param {string} url - url string to GET, base url not included
     * @param {object} header - an object of the header key, value, defaults as empty object
     * @return {promise} returns error only if network fails. see: whatwg-fetch 
     */
    get(url, header={}){
        url = this.baseUrl + url;
        return fetch(url, {
            header: Object.assign(header, this.header),
            method: 'GET'
        });
    }
    /**
     * DELETE HTTP method -> Example:
     * 
     * requests.delete('myapi.com/v1/students', {Authorization: 'Basic user:password'})
     * @param {string} url - url string to DELETE, base url not included
     * @param {object} header - an object of the header key, value, defaults as empty object
     * @return {promise} returns error only if network fails. see: whatwg-fetch 
     */
    delete(url, header={}){
        url = this.baseUrl + url;
        return fetch(url, {
            header: Object.assign(header, this.header),
            method: 'DELETE'
        });
    }
    /**
     * POST HTTP method -> Example:
     * 
     * requests.get('myapi.com/v1/students', {Authorization: 'Basic user:password'})
     * @param {string} url - url string to POST, base url not included
     * @param {object} payload - an object that will be send in the body as json
     * @param {object} header - an object of the header key, value, defaults as empty object
     * @returns {promise} returns error only if network fails or invalid payload. see: whatwg-fetch 
     */
    post(url, payload, header={}){
        url = this.baseUrl + url;
        header['Content-Type'] = 'appliaction/json';
        let jsonString;
       
        try {
            jsonString = JSON.stringify(payload);    
        } catch (error) {
            return new Promise((success, reject)=>{
                reject('Invalid Payload')
            });
        }
        return fetch(url, {
            header: Object.assign(header, this.header),
            method: 'POST',
            body: jsonString
        });
    }
    /**
     * PUT HTTP method -> Example:
     * 
     * requests.get('myapi.com/v1/students', {Authorization: 'Basic user:password'})
     * @param {string} url - url string to PUT, base url not included
     * @param {object} payload - an object that will be send in the body as json
     * @param {object} header - an object of the header key, value, defaults as empty object
     * @returns {promise} returns error only if network fails or invalid payload. see: whatwg-fetch 
     */
    put(url, payload, header={}){
        url = this.baseUrl + url;
        header['Content-Type'] = 'appliaction/json';
        let jsonString;
        
        try {
            jsonString = JSON.stringify(payload);    
        } catch (error) {
            return new Promise((success, reject)=>{
                reject('Invalid Payload')
            });
        }
        return fetch(url, {
            header: Object.assign(header, this.header),
            method: 'PUT',
            body: jsonString
        });
    }
}