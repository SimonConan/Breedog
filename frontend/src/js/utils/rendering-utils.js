exports.template = (searchResults) => {
    
    const Handlebars = require('handlebars');
    
    const singleResultTemplate = require('../templates/single-result.js');
    const hbsTemplate = Handlebars.compile(singleResultTemplate);

    searchResults = JSON.parse(searchResults);

    for (const key in searchResults) {
        const currentHTMLElement = new DOMParser().parseFromString(
            hbsTemplate({ 
                ...searchResults[key],
                score: Math.floor(parseInt(searchResults[key].score))
            }), 
            "text/html"
        );
    
        document.getElementById('results-list').appendChild(currentHTMLElement.querySelector('div.result'));
    }
};