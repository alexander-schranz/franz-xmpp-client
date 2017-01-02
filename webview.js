const $ = require('jquery');
const login = require('./components/login');

// xmpp integration
module.exports = (Franz, options) => {
    Franz.injectCSS('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
    Franz.injectCSS('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css');

    $(document).ready(function() {
        login.init($('#main'));
    });
}
