// sort 'em first to be safe.
messages.sort((first, second) => new Date(first.date) - new Date(second.date));

const passedMsgs = messages.filter((elem) => new Date(elem.date) < new Date());
const latestMsg = passedMsgs.slice(-1)[0];
const image = document.querySelector('[data-image]');
const text = document.querySelector('[data-text]');

image.src = `./assets/images/${latestMsg.image}`;
text.innerHTML = latestMsg.text;
