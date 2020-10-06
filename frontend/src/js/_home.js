const api = require('./utils/api-utils');
const dUtils = require('./utils/data-utils');
const eUtils = require('./utils/event-utils');

const chosenCriteria = document.getElementById('chosen-criteria'),
    remainingCriteria = document.getElementById('remaining-criteria'),
    buttonTopSection = document.querySelector('#top-section .button');

api.getApiResult("GET", "http://localhost:3000/api/criteria")
    .then(res => {

        const criteriaList = JSON.parse(res);

        dUtils.toArray(criteriaList).forEach(element => {
            element.forEach(criteria => {
                const currentCriteriaElement = document.createElement("span");
                currentCriteriaElement.className = 'criteria';
                currentCriteriaElement.setAttribute('data-criteria', Object.keys(criteria));
                currentCriteriaElement.textContent = criteria[Object.keys(criteria)];
                remainingCriteria.appendChild(currentCriteriaElement);
            });
        });

    })
    .catch(error => console.error(error));

eUtils.homeCriteriaEvents(chosenCriteria, remainingCriteria);
eUtils.homeClickEvents(buttonTopSection, chosenCriteria);