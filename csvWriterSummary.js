function csvWriter(data, path) {
  const createCsvWriter = require('csv-writer').createObjectCsvWriter;
  const writer = createCsvWriter({
    path: `${path}/summary.csv`,
    header: [
      {id: 'pdam', title: 'pdam'},
      {id: 'totalData', title: 'totalData'},
    ]
  });

  writer
    .writeRecords(data)
    .then(()=> console.log(`The summary.csv file was written successfully`));
}

module.exports = csvWriter;