// sort 'em first to be safe.
messages.sort((first, second) => new Date(first.date) - new Date(second.date));

const passedMsgs = messages.filter((elem) => new Date(elem.date) < new Date());
const latestMsg = passedMsgs.slice(-1)[0];
const image = document.querySelector('[data-image]');
const text = document.querySelector('[data-text]');

image.src = `./assets/images/${latestMsg.image}`;
text.innerHTML = latestMsg.text;

const box = document.querySelector('[data-box]');
const container = document.querySelector('[data-container]');

messages.forEach((element) => {
  let clone = box.cloneNode(true);
  let cloneImage = clone.querySelector('[data-image]');
  let cloneText = clone.querySelector('[data-text]');

  cloneImage.src = `./assets/images/${element.image}`;
  cloneText.innerHTML = element.text;

  container.appendChild(clone);
});
