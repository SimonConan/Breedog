// exports.getCookie = (cookieName) => {
//     const cookieContent = document.cookie.split(cookieName + '=')[1].split(',');
//     cookieContent.forEach(element => {
//         console.log(Object.values(element));
//     });
// };

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