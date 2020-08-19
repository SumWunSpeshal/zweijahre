const messages = [
  {
    date: '2020-08-11T22:21:38.140Z',
    image: 'pepe.jpg',
    text: 'Hello World1',
  },
  {
    date: '2020-08-24T00:00:00.000Z',
    image: 'asdasdasd',
    text:
      'Zwei ganze Jahre sind es nun. Lass’ uns das heute feiern und uns auf viele weitere freuen!',
  },
  {
    date: '2020-08-31T00:00:00.000Z',
    image: 'job.jpg',
    text:
      'Diese Woche beginnt Dein neuer Job, Bebi! Ein Hoch darauf, dass Du (hoffentlich) keine 40-Jährigen mehr durchtragen musst. Du rockst das! ',
  },
  {
    date: '2020-09-07T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'Immer Du!',
  },
  {
    date: '2020-09-14T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2020-09-21T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2020-09-28T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2020-10-05T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2020-10-12T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2020-10-19T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2020-10-26T01:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2020-11-02T01:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2020-11-09T01:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2020-11-16T01:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2020-11-23T01:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2020-11-30T01:00:00.000Z',
    image: 'advent.jpg',
    text:
      'Throwback zu dem Jahr, als wir uns zu große Adventsgeschenke gemacht haben. Auf eine tolle Weihnachtszeit mit Dir!',
  },
  {
    date: '2020-12-07T01:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2020-12-14T01:00:00.000Z',
    image: 'einzug.jpg',
    text:
      'Ompteda ist diese Woche seit einem Jahr unser erstes gemeinsames zuhause. Happy Birthday Ompteda!',
  },
  {
    date: '2020-12-21T01:00:00.000Z',
    image: 'weihnachten.jpg',
    text: 'Fröhliche Weihnachten, mein Schatz!',
  },
  {
    date: '2020-12-28T01:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-01-04T01:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-01-11T01:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-01-18T01:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-01-25T01:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-02-01T01:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-02-08T01:00:00.000Z',
    image: 'valentinstag.jpg',
    text:
      'Diese Woche ist Valentinstag, Bebi. Ich hoffe wir haben uns bis dahin etwas cooles vorgenommen. Immer Du!',
  },
  {
    date: '2021-02-15T01:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-02-22T01:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-03-01T01:00:00.000Z',
    image: 'asdasdasd',
    text:
      'HAPPY BIRTHDAY, MEIN ENGEL! GENAU HEUTE BIST DU EIN JAHRE ÄLTER GEWORDEN!',
  },
  {
    date: '2021-03-08T01:00:00.000Z',
    image: 'weltfrauentag.jpg',
    text:
      'Heute ist Weltfrauentag. Feiern wir das mit der stärksten Frau, die ich kenne!',
  },
  {
    date: '2021-03-15T01:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-03-22T01:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-03-29T00:00:00.000Z',
    image: 'asdasdasd',
    text:
      'Happy Easter, Bebi! Ist man mittlerweile zu alt zum Eier suchen oder machen wir das dieses Jahr noch?',
  },
  {
    date: '2021-04-05T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-04-12T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-04-19T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-04-26T00:00:00.000Z',
    image: 'asdasdasd',
    text:
      'Der erste Mai steht bevor und es ist ein Samstag… Kein langes Wochenende :( Machen wir trotzdem was cooles?',
  },
  {
    date: '2021-05-03T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-05-10T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-05-17T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-05-24T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-05-31T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-06-07T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-06-14T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-06-21T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-06-28T00:00:00.000Z',
    image: 'pepe.jpg',
    text: 'Happy Birthday, Pepe! Du bist mittlerweile ein ganzes Jahr bei uns!',
  },
  {
    date: '2021-07-05T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-07-12T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-07-19T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-07-26T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-08-02T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-08-09T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-08-16T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-08-23T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
  {
    date: '2021-08-30T00:00:00.000Z',
    image: 'asdasdasd',
    text: 'asdadsasd',
  },
];
