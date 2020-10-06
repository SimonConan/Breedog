async function getApiResult(method, url) {
    return await makeRequest(method, url);
}

function makeRequest(method, url) {
    return new Promise(function(resolve, reject) {

        let xhr = new XMLHttpRequest();
        
        xhr.open(method, url);
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
        xhr.send();

    });
}

module.exports = {
    getApiResult
};