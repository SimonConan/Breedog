import '../scss/main.scss';

const home = require('./_home'),
    results = require('./_results');

// If the body class contains home call the home function. If not call the results function
document.querySelector('body').classList.contains('home') ? home.home() : results.results();