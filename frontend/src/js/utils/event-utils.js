/**
 * We use event delegation to avoid targeting problems
 */
exports.homeEvents = (chosenCriteria, remainingCriteria) => {
    document.addEventListener('click', e => {
                
        if(e.target.matches('span.criteria')) {
            const clickedCriteria = e.target;
            clickedCriteria.parentElement.id === 'remaining-criteria' ? chosenCriteria.appendChild(clickedCriteria) : remainingCriteria.appendChild(clickedCriteria);
        }

        e.stopPropagation();
        e.preventDefault();

    });
};