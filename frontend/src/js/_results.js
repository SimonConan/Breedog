exports.results = () => {

    try {

        if (!document.cookie) throw new Error('Cookie not available');

        const api = require('./utils/api-utils');
        const cUtils = require('./utils/cookie-utils');
        const rUtils = require('./utils/rendering-utils');

        const searchID = cUtils.getCookie(process.env.SEARCH_COOKIE_NAME);

        if (!searchID) throw new Error('Cookie not available');

        api.getApiResult('POST', process.env.API_SEARCH + '/' + searchID.replace(/"/g, ""))
            .then(searchResults => rUtils.template(searchResults))
            .catch(err => { throw err; });

    } catch (error) {
        document.getElementById('no-results').setAttribute('style', 'display: flex');
        console.error(error);
    }


};