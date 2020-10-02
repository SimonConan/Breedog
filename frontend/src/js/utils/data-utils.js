function toArray(obj, topProp) {
    const result = [];
    for (const prop in obj) {
        const value = obj[prop];
        if (typeof value === 'object') {
            result.push(toArray(value, prop));
        } else {
            result.push({ [topProp + '.' + prop]: value });
        }
    }
    return result;
}

module.exports = {
    toArray,
}