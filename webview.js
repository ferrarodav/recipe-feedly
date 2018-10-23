module.exports = Franz => {
  const getUnread = function getMessages() {
    let count = 0;
    const searchElement = document.querySelector('.categoryUnreadCount[data-category="global.all"]');
    if (searchElement) {
      const text = searchElement.innerText;
      if (text == "1K+")
        count = 1000;
      else
        count = parseInt(text);
    }

    Franz.setBadge(count);
  };

  Franz.loop(getUnread);
};
