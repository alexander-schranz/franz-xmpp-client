// xmpp integration
module.exports = (Franz, options) => {
    const getMessages = () => {
        let msgContainer = document.querySelector('.contacts-tab > .msgs-indicator');
        let directMessages = msgContainer == null ? 0 : parseInt(msgContainer.innerText, 10);
        let indirectMessages = 0;

        Franz.setBadge(directMessages, indirectMessages);
    }

    Franz.loop(getMessages);
}
