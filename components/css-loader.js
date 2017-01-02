module.exports = {
    load: function(href) {
        var link = document.createElement('link');
        link.href = href;
        link.rel = 'stylesheet';
        document.querySelector('head').appendChild(link);
    }
};
