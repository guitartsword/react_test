import 'whatwg-fetch'

export default class requests{
    /**
     * 
     * @param {string} baseUrl - the base url this class will always send requests
     * @param {object} baseHeader - header that will always be
     *  sent in additional to new headers per request
     */
    constructor(baseUrl, baseHeaeder={}){
        if(typeof baseUrl !== 'string')
            throw new TypeError('expected baseUrl to be string')
        if(typeof baseHeaeder !== 'object')
            throw new TypeError('expected header to be object')
        this.header = baseHeaeder;
        this.baseUrl = baseUrl;
    }
    /**
     * see whatwg-fetch documentation
     * 
     * fetch(url, header);
     * @param {string} url
     * @param {object} options
     * @returns {Promise} return fetch(this.baseUrl + url, options)
     */
    fetch(url, options={}){
        url = this.baseUrl + url;
        return fetch(url, options);
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
        return this.request('GET', url, header);
    }
    /**
     * DELETE HTTP method -> Example:
     * 
     * requests.delete('myapi.com/v1/students', {Authorization: 'Basic user:password'})
     * @param {string} url - url string to DELETE, base url not included
     * @param {object} header - an object of the header key, value, defaults as empty object
     * @return {promise} returns error only if network fails. see: whatwg-fetch 
     */
    delete(url, header={}, payload={}){
        return this.request('DELETE', url, header, payload);
    }
    /**
     * POST HTTP method -> Example:
     * 
     * requests.get('myapi.com/v1/students', {Authorization: 'Basic user:password'})
     * @param {string} url - url string to POST, base url not included
     * @param {object} header - an object of the header key, value, defaults as empty object
     * @param {object} payload - an object that will be send in the body as json
     * @returns {promise} returns error only if network fails or invalid payload. see: whatwg-fetch 
     */
    post(url, header={}, payload={}){
        return this.request('POST', url, header, payload);
    }

    /**
     * PUT HTTP method -> Example:
     * 
     * requests.get('myapi.com/v1/students', {Authorization: 'Basic user:password'})
     * @param {string} url - url string to PUT, base url not included
     * @param {object} header - an object of the header key, value, defaults as empty object
     * @param {object} payload - an object that will be send in the body as json
     * @returns {promise} returns error only if network fails or invalid payload. see: whatwg-fetch 
     */
    put(url, header={}, payload={}){
        return this.request('PUT', url, header, payload);
    }

    /**
     * 
     * @param {string} method 
     * @param {string} url 
     * @param {object} header 
     * @param {json} payload 
     */
    request(method, url, header={}, payload={}){
        let options = {
            method: method,
            header: Object.assign(this.header, header)
        }
        
        try {
            if (Object.keys(payload).length){
                options.body = JSON.stringify(payload);
                header['Content-Type'] = 'appliaction/json';
            }
        } catch (error) {
            return new Promise((success, reject) => {
                reject('Invalid Payload')
            });
        }

        return fetch(this.baseUrl + encodeURIComponent(url), options)
    }
}