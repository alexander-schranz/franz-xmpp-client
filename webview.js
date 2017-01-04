// xmpp integration
module.exports = (Franz, options) => {
    const getMessages = () => {
        const directMessages = parseInt(document.querySelector('.unread-message-count').innerText, 10);
        const indirectMessages = 0;

        Franz.setBadge(directMessages, indirectMessages);
    }

    Franz.loop(getMessages);
}
