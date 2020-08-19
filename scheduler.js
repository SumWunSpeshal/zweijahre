// sort 'em first to be safe.
messages.sort((first, second) => new Date(first.date) - new Date(second.date));

const passedMsgs = messages.filter((elem) => new Date(elem.date) < new Date('2021-01-11T01:00:00.000Z'));
const latestMsg = passedMsgs.slice(-1)[0];
const nextMsg = messages[messages.indexOf(latestMsg) + 1];
const localeNextDate = new Date(nextMsg.date).toLocaleDateString('de-DE');
const image = document.querySelector('[data-image]');
const text = document.querySelector('[data-text]');
const nextDateText = document.querySelector('[data-next-date]');

image.src = `./assets/images/${latestMsg.image}`;
text.innerHTML = latestMsg.text;
nextDateText.innerHTML = `Nachricht #${messages.indexOf(latestMsg) + 1} <br> Nächste Nachricht am ${localeNextDate}`;
