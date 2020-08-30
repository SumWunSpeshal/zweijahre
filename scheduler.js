// sort 'em first to be safe.
messages.sort((first, second) => new Date(first.date) - new Date(second.date));

const passedMsgs = messages.filter(elem => new Date(elem.date) < new Date());
const latestMsg = passedMsgs.slice(-1)[0];
const nextMsg = messages[messages.indexOf(latestMsg) + 1];
const localeNextDate = new Date(nextMsg.date).toLocaleDateString('de-DE');
const box = document.querySelector('[data-box]');
const image = document.querySelector('[data-image]');
const text = document.querySelector('[data-text]');
const nextDateText = document.querySelector('[data-next-date]');
const container = document.querySelector('[data-container]');
const historyItem = document.querySelector('[data-history-item]');

(() => {
  showLatestMessage();
  showHistory();
})();

function showLatestMessage() {
  if (!box) {
    return;
  }

  image.src = `./assets/images/${latestMsg.image}`;
  text.innerHTML = latestMsg.text;
  nextDateText.innerHTML = `Nachricht #${messages.indexOf(latestMsg) + 1} <br> Nächste Nachricht am ${localeNextDate}`;
}

function showHistory() {
  if (!container) {
    return;
  }

  const history = passedMsgs;
  history.pop();

  history.forEach(element => {
    const clone = historyItem.cloneNode(true);
    clone.querySelector('[data-image]').src = `./assets/images/${element.image}`;
    clone.querySelector('[data-text]').innerHTML = element.text;
    clone.classList.remove('is-hidden');
    container.appendChild(clone);
  });

  historyItem.remove();
}
