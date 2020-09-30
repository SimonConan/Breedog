/**
 * Return an object to be used in the aggregate MongoDB function
 * @param {object} criteria 
 */
function breedInfo(criteria) {
    const userCriteria = {};
    for (const key in criteria) {
        userCriteria[criteria[key]] = 1;
    }
    return {
        ...userCriteria,
        "nameId": 1,
        "name": 1,
        "originalLink": 1,
        "imageUrl": 1,
        "size": 1,
        "lifespan": 1,
        "budget": 1,
        "score": scoreFormula(criteria)
    };
}

/**
 * Return the formula to be used to calculate the affinity percentage with the breed
 * @param {object} criteria 
 */
function scoreFormula(criteria) {
    return {
        "$multiply": [
            100,
            {
                "$divide": [
                    { "$add": weightedCriteria(criteria) },
                    scoreMax(criteria)
                ]
            }
        ]
    };
}

/**
 * Return an array to be used to calculate the score 
 * @param {object} criteria 
 */
function weightedCriteria(criteria) {
    const weightedCriteria = [];
    let multiplier = Object.keys(criteria).length + 1;

    /**
     * For each criteria given by the user, we create the array awaited by the aggregate function
     * Each criteria is weighted : it is multiplied by its ranking in the user's choices
     */
    for (const key in criteria) {
        const currentCriteriaWeight = ["$" + criteria[key], --multiplier];
        const currentCriteriaMultiplyObject = { "$multiply": currentCriteriaWeight };
        weightedCriteria.push(currentCriteriaMultiplyObject);
    }

    return weightedCriteria;
}

/**
 * Return the maximal score that a breed can have regarding the user's criteria
 * @param {object} criteria 
 */
function scoreMax(criteria) {
    let scoreMax = 0,
        i = 0;
    for (const key in criteria) {
        scoreMax += ++i * 5;
    }
    return scoreMax;
}

module.exports = {
    breedInfo
};