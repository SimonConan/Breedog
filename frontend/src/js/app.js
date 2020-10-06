import '../scss/main.scss';

const home = require('./_home'),
    results = require('./_results');

document.querySelector('body').classList.contains('home') ? home.home() : results.results();