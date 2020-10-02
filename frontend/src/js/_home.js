const criteriaList = document.querySelectorAll('span.criteria'),
    remainingCriteria = document.getElementById('remaining-criteria'),
    chosenCriteria = document.getElementById('chosen-criteria');

criteriaList.forEach(criteria => {
    criteria.addEventListener('click', () => {
        criteria.parentElement.id === 'remaining-criteria' ? chosenCriteria.appendChild(criteria) : remainingCriteria.appendChild(criteria);
    });
});