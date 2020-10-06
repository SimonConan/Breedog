/**
 * Recursive function to push an object (simple \ nested) in an array
 * @param {object} obj 
 * @param {string | number} topProperties 
 */
function toArray(obj, topProperties) {
    const result = [];
    for (const prop in obj) {
        const value = obj[prop];
        if (typeof value === 'object') {
            result.push(toArray(value, prop));
        } else {
            result.push({ [topProperties + '.' + prop]: value });
        }
    }
    return result;
}

/**
 * Push a data at the last index of an object
 * @param {object} object 
 * @param {string | number} dataToPush 
 */
function pushToObject(object, dataToPush) {
    object[Object.keys(object).length] = dataToPush;
    return object;
}

module.exports = {
    toArray,
    pushToObject
};