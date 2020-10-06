const api = require('./api-utils'),
    dUtils = require('./data-utils');

/**
 * We use event delegation to avoid targeting problems
 */
exports.homeClickEvents = (chosenCriteria, remainingCriteria) => {
    document.addEventListener('click', e => {
        
        // Manage click on each criteria
        if(e.target.matches('span.criteria')) {
            chosenCriteria.classList.remove('error');
            const clickedCriteria = e.target;
            clickedCriteria.parentElement.id === 'remaining-criteria' ? chosenCriteria.appendChild(clickedCriteria) : remainingCriteria.appendChild(clickedCriteria);
        
        // Manage click on search button
        } else if(e.target.matches('#search-button')) {
            let chosenCriteriaApiObject = {};
            for (const child of chosenCriteria.children) {
                dUtils.pushToObject(chosenCriteriaApiObject, child.dataset.criteria);
            }
            if (Object.keys(chosenCriteriaApiObject).length === 0) {
                console.warn('No criteria selected');
                chosenCriteria.classList.add('error');
                scrollTo(chosenCriteria.offsetTop - 20);
                return;
            }
            api.getApiResult('POST', process.env.API_GET_RESULT, chosenCriteriaApiObject)
                .then(res => console.log(res))
                .catch(err => console.error(err));

        // Make the default button click behavior to scroll to the search
        } else if (e.target.matches('.button')) {
            scrollTo(chosenCriteria.offsetTop - 20);
        }

        e.stopPropagation();
        e.preventDefault();

    });
};

/**
 * Scroll to a certain height in the page
 * @param {number} top 
 */
function scrollTo(top) {
    window.scrollTo({
        top: top,
        behavior: "smooth"
    });
}