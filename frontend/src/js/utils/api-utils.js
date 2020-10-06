/**
 * Async function that call the makeRequest() function and returns a promise with the res / err of the api call
 * @param {string} method 
 * @param {string} url 
 * @param {object} body 
 */
async function getApiResult(method, url, body) {
    return await makeRequest(method, url, body);
}

/**
 * Function that returns a promise with the res / err of the api call
 * @param {string} method 
 * @param {string} url 
 * @param {object} body 
 */
function makeRequest(method, url, body) {
    return new Promise(function(resolve, reject) {

        let xhr = new XMLHttpRequest();
        
        xhr.open(method, url);
        if(method === 'POST') xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function() {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(JSON.stringify(body));

    });
}

module.exports = {
    getApiResult
};