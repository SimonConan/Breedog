/**
 * We use event delegation to avoid targeting problems
 */
exports.homeCriteriaEvents = (chosenCriteria, remainingCriteria) => {
    document.addEventListener('click', e => {
                
        if(e.target.matches('span.criteria')) {
            const clickedCriteria = e.target;
            clickedCriteria.parentElement.id === 'remaining-criteria' ? chosenCriteria.appendChild(clickedCriteria) : remainingCriteria.appendChild(clickedCriteria);
        }

        e.stopPropagation();
        e.preventDefault();

    });
};

exports.homeClickEvents = (button, placeToScrollTo) => {
    button.addEventListener('click', () => {
        window.scrollTo({
            top: placeToScrollTo.offsetTop,
            behavior: "smooth"
        });
    });
}