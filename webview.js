// xmpp integration
module.exports = (Franz, options) => {
    function getMessages() {
        const count = {};
        const FranzData = document.querySelector('#FranzMessages').dataset;

        if (FranzData) {
            count.count = FranzData.direct;
            count.count_indirect = FranzData.indirect;
        }

        Franz.setBadge(count);
    }

    Franz.loop(getMessages);

    Franz.injectCSS('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
    Franz.injectCSS('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css');
}
