// sort 'em first to be safe.
messages.sort((first, second) => new Date(first.date) - new Date(second.date));

const passedDates = messages.filter((elem) => new Date(elem.date) < new Date());
const latestDate = passedDates.slice(-1)[0];
