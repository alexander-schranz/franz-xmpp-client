var view = require('../templates/login.html.js');

module.exports = {
    init: function(main) {
        main.innerHTML = view;
    }
};
