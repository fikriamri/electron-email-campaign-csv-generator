function csvWriter(title, data, path) {
  const createCsvWriter = require('csv-writer').createObjectCsvWriter;
  const writer = createCsvWriter({
    path: `${path}/${title}.csv`,
    header: [
      {id: 'to', title: 'to'},
      {id: 'subject', title: 'subject'},
      {id: 'message', title: 'message'},
      {id: 'sender', title: 'sender'},
      {id: 'from', title: 'from'},
    ]
  });

  writer
    .writeRecords(data)
    .then(()=> console.log(`${title} = ${data.length}`));
}

module.exports = csvWriter;