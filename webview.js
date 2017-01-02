const login = require('./components/login');
const cssLoader = require('./components/css-loader');

// xmpp integration
module.exports = (Franz, options) => {
    cssLoader.load('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
    cssLoader.load('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

    login.init(document.getElementById('main'));
}
