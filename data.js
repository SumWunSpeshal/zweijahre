const messages = [
  {
    date: '2020-08-11T22:21:38.140Z',
    image: 'placeholder.png',
    text: 'Hello World1',
  },
  {
    date: '2020-08-24T00:00:00.000Z',
    image: 'zweijahre.jpg',
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
    image: 'immerdu.jpg',
    text: 'Immer Du!',
  },
  {
    date: '2020-09-14T00:00:00.000Z',
    image: 'neinneinnein.png',
    text: 'Nein, Nein, Nein, Nein!',
  },
  {
    date: '2020-09-21T00:00:00.000Z',
    image: 'jaokay.jpg',
    text: 'Ja okay, Ja okay, Ja okay…',
  },
  {
    date: '2020-09-28T00:00:00.000Z',
    image: 'oceans.jpg',
    text:
      'Oceans rise, empires fall. We have seen each other through it all. And when push comes to shove. I will send a fully armed battalion to remind you of my love!',
  },
  {
    date: '2020-10-05T00:00:00.000Z',
    image: 'babymaker.jpg',
    text: 'Hoffentlich läuft das bei uns besser als beim Babymaker.',
  },
  {
    date: '2020-10-12T00:00:00.000Z',
    image: 'riechen.jpg',
    text: 'Wenn Baby Erwin mal wieder gut riecht.',
  },
  {
    date: '2020-10-19T00:00:00.000Z',
    image: 'pappig.jpg',
    text: 'Drei mal zäh und pappig!',
  },
  {
    date: '2020-10-26T01:00:00.000Z',
    image: 'corona.jpg',
    text:
      'Wenn das Leben einem Corona gibt, machen wir einfach Video-Chats draus!',
  },
  {
    date: '2020-11-02T01:00:00.000Z',
    image: 'booty.jpg',
    text: 'Wenn die Hose mal wieder nicht den süßen Booty im Zaum halten kann',
  },
  {
    date: '2020-11-09T01:00:00.000Z',
    image: 'smiling.jpg',
    text: 'Keep smiling, keep shining, keep going on!',
  },
  {
    date: '2020-11-16T01:00:00.000Z',
    image: 'photogen.jpg',
    text: 'Auf die zwei photogensten Menschen der Welt!',
  },
  {
    date: '2020-11-23T01:00:00.000Z',
    image: 'lego.jpg',
    text: 'Lego-Hand-Reschinna <3',
  },
  {
    date: '2020-11-30T01:00:00.000Z',
    image: 'advent.jpg',
    text:
      'Throwback zu dem Jahr, als wir uns zu große Adventsgeschenke gemacht haben. Auf eine tolle Weihnachtszeit mit Dir!',
  },
  {
    date: '2020-12-07T01:00:00.000Z',
    image: 'blond.jpg',
    text: 'Beweis, dass auch die blonde Regina hübsch aussieht <3',
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
    image: 'silvester.jpg',
    text:
      'Nur noch wenige Tage bis wir ins neue Jahr rutschen. Ich wünsche Dir nur das Beste für das neue Jahr, Bebi. Happy New Year!',
  },
  {
    date: '2021-01-04T01:00:00.000Z',
    image: 'food.jpg',
    text: 'Food? Food!',
  },
  {
    date: '2021-01-11T01:00:00.000Z',
    image: 'filmcrew.jpg',
    text: 'Solidarisch ist man nicht alleine! #bestfilmcrew',
  },
  {
    date: '2021-01-18T01:00:00.000Z',
    image: 'ungern.jpg',
    text: 'Ungern!',
  },
  {
    date: '2021-01-25T01:00:00.000Z',
    image: 'vollgut.jpg',
    text: 'Weil wir zusammen voll gut sind!',
  },
  {
    date: '2021-02-01T01:00:00.000Z',
    image: 'eisbaer.jpg',
    text:
      'Los, los! Wir haben keine Zeit zu verlieren. Wir haben noch Eisbären zu retten!',
  },
  {
    date: '2021-02-08T01:00:00.000Z',
    image: 'valentinstag.jpg',
    text:
      'Diese Woche ist Valentinstag, Bebi. Ich hoffe wir haben uns bis dahin etwas cooles vorgenommen. Immer Du!',
  },
  {
    date: '2021-02-15T01:00:00.000Z',
    image: 'space.jpg',
    text: 'Space!',
  },
  {
    date: '2021-02-22T01:00:00.000Z',
    image: 'comrades.jpg',
    text: 'Crack open a cold one with the comrades!',
  },
  {
    date: '2021-03-01T01:00:00.000Z',
    image: 'birthday.jpg',
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
    image: 'beine.jpg',
    text:
      'Dass diese Welt nicht zusammenfällt, liegt nur allein an deinen Beinen.',
  },
  {
    date: '2021-03-22T01:00:00.000Z',
    image: 'dork.jpg',
    text:
      'So würde ich immer aussehen, wenn Du mich nicht davon abhalten würdest. Liebe <3',
  },
  {
    date: '2021-03-29T00:00:00.000Z',
    image: 'easter.jpg',
    text:
      'Happy Easter, Bebi! Ist man mittlerweile zu alt zum Eier suchen oder machen wir das dieses Jahr noch?',
  },
  {
    date: '2021-04-05T00:00:00.000Z',
    image: 'vergessen.jpg',
    text: 'Ich liebe Dich. Vergiss’ das nie!',
  },
  {
    date: '2021-04-12T00:00:00.000Z',
    image: 'hundertuhr.jpg',
    text: 'Feiern bis nach 100 Uhr!',
  },
  {
    date: '2021-04-19T00:00:00.000Z',
    image: 'weggezischt.jpg',
    text: 'Eins zu eins gemischt, aufgetischt. Weggezischt. Und dann vor vorn.',
  },
  {
    date: '2021-04-26T00:00:00.000Z',
    image: 'erstermai.jpg',
    text:
      'Der erste Mai steht bevor und es ist ein Samstag… Kein langes Wochenende :( Machen wir trotzdem was cooles?',
  },
  {
    date: '2021-05-03T00:00:00.000Z',
    image: 'kuchen.jpg',
    text: 'Sollen sie doch Kuchen essen!',
  },
  {
    date: '2021-05-10T00:00:00.000Z',
    image: 'geburtstagskind.jpg',
    text: `Weißt du eigentlich, du bist das Geburtstagskind. 25 Jahr' plötzlich, und wir stoßen heut' an auf dich.`,
  },
  {
    date: '2021-05-17T00:00:00.000Z',
    image: 'genial.jpg',
    text: `C'était vraiment génial!`,
  },
  {
    date: '2021-05-24T00:00:00.000Z',
    image: 'homeoffice.jpg',
    text:
      'Der Blick eines verschreckten Entwicklers, wenn man ihn in seinem natürlichen Habitat aufsucht.',
  },
  {
    date: '2021-05-31T00:00:00.000Z',
    image: 'geschenk.jpg',
    text:
      'Danke, dass Du immer die Geschenkideen hast und Dir immer die Mühe machst <3...',
  },
  {
    date: '2021-06-07T00:00:00.000Z',
    image: 'timoweg.jpg',
    text: '... auch wenn es manchmal bedeutet Abschied zu nehmen :(',
  },
  {
    date: '2021-06-14T00:00:00.000Z',
    image: 'suessi.jpg',
    text: 'Süßi in Paris',
  },
  {
    date: '2021-06-21T00:00:00.000Z',
    image: 'coolkids.jpg',
    text:
      'Cool Kids On The Block! Haben wir unser Versprechen eingehalten und Max und Pim mal wieder besucht?',
  },
  {
    date: '2021-06-28T00:00:00.000Z',
    image: 'pepe.jpg',
    text: 'Happy Birthday, Pepe! Du bist mittlerweile ein ganzes Jahr bei uns!',
  },
  {
    date: '2021-07-05T00:00:00.000Z',
    image: 'erwin.jpg',
    text:
      'Ein bisschen spät, aber Erwin ist mittlerweile ein Jahr alt. Wie sieht er aus? Ist er groß geworden? Kann er schon laufen?',
  },
  {
    date: '2021-07-12T00:00:00.000Z',
    image: 'letztelieferung.jpg',
    text: 'Tage seit letzter Lieferung: 0',
  },
  {
    date: '2021-07-19T00:00:00.000Z',
    image: 'albern.jpg',
    text:
      'Erinnerung, dass wir uns nicht immer all zu ernst nehmen sollten :) Manchmal reicht es gemeinsam albern zu sein',
  },
  {
    date: '2021-07-26T00:00:00.000Z',
    image: 'sophie.jpg',
    text:
      'Schau mal! Ich hab sogar ein altes Babyfoto von Sophie gefunden? Wie lange ist es jetzt wohl her, dass Du sie zuletzt gesehen hast :v)',
  },
  {
    date: '2021-08-02T00:00:00.000Z',
    image: 'dirndl.jpg',
    text: 'Dirndl on fleek. Bayerische Reschinna ist hot wie immer!',
  },
  {
    date: '2021-08-09T00:00:00.000Z',
    image: 'baptiste.jpg',
    text:
      'Bald ist es ein Jahr schon her, dass wir Baptiste in Ulm besucht haben!',
  },
  {
    date: '2021-08-16T00:00:00.000Z',
    image: 'roadtrip.jpg',
    text: 'Weil nicht mal 15 Stunden Autofahrt uns aus der Bahn wirft!',
  },
  {
    date: '2021-08-23T00:00:00.000Z',
    image: 'dreijahre.jpg',
    text:
      'Ende der Woche ist unser dritter Jahrestag. Aufgabe an dich: Erzähl meinem Zukunfts-Ich, was wir alles geschafft haben im vergangenen Jahr! Ist Corona noch ein Thema? Arbeite ich noch bei wendweb? Was für einen Job hast Du mittlerweile? Ist Trump noch Präsident?',
  },
  {
    date: '2021-08-30T00:00:00.000Z',
    image: 'ende.jpg',
    text:
      'Das hier ist Deine letzte Nachricht. Die App wird jetzt für immer diese Nachricht anzeigen! Deswegen, die wichtigste aller Nachrichten: Ich liebe Dich und wünsche mir für uns, dass wir alle weiteren Herausforderungen zusammen meistern und weiterhin gut zueinander sind! <3',
  },
];
