import path from 'path';

module.exports = (Franz) => {
  const getMessages = () => {
    const directMessages = document.querySelectorAll(`.cu-icon.cu-notification-alert__dot.ng-star-inserted`).length;

    // set Franz badge
    Franz.setBadge(directMessages);
  };
  Franz.loop(getMessages);

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'service.css'));
};
