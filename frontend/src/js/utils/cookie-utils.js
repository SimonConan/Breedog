/**
 * Return the value of a cookie based on its name
 * @param {string} cookieName 
 */
exports.getCookie = (cookieName) => {
    return document.cookie.split(cookieName + '=')[1].split(';')[0];
};

/**
 * Set the string content of a cookie
 * @param {string} value 
 */
exports.setCookie = (value) => {
    let cookieString = process.env.SEARCH_COOKIE_NAME + '=' + value;
        cookieString += ';max-age=' + process.env.SEARCH_COOKIE_MAX_AGE;
        cookieString += ';path="/";samesite=none';
    
    document.cookie = cookieString;
}