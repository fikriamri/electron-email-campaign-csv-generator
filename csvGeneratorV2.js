// File atau folder ini perlu dimasukan ke Github-ku
const csv = require('csv-parser');
const fs = require('fs');
const csvAddHeader = require('./csvAddHeader');
const csvWriter = require('./csvWriter');
const csvWriterSummary = require('./csvWriterSummary');

async function csvGeneratorV2(folderPath, sourceFile, subjectName, htmlResult) {

  const assetsFolder = `${folderPath}/assets`;

  if (!fs.existsSync(folderPath)){
    fs.mkdirSync(folderPath);
    fs.mkdirSync(assetsFolder);
  } else if (!fs.existsSync(assetsFolder)) {
    fs.mkdirSync(assetsFolder);
  }

  const fileCSVPath = await csvAddHeader(assetsFolder, sourceFile);

  const objectDataAll = {}
  console.log('response', fileCSVPath)

  return new Promise(resolve => {
    fs.createReadStream(fileCSVPath)
    .pipe(csv())
    .on('data', (row) => {
      if (row.pdam) {
        const pdamName = row.pdam.replace(/\s/g, "");
        if (!(pdamName in objectDataAll)) {
          const temp = {
            to: row.email,
            subject: subjectName,
            message: htmlResult,
            sender: 'PDAM Info',
            from: 'pdaminfo@bsa.id',
          };
          Object.assign(objectDataAll, {[pdamName]: [temp]});
        } else {
          const temp = {
            to: row.email,
            subject: subjectName,
            message: htmlResult,
            sender: 'PDAM Info',
            from: 'pdaminfo@bsa.id',
          };
          objectDataAll[pdamName].push(temp);
        }
      }
    })
    .on('end', () => {
      const summaryData = [];
      let total = 0;
      let pdamCount = 0;
      // Create csv file for all PDAM
      for (const property in objectDataAll) {
        csvWriter(property, objectDataAll[property], folderPath);
        pdamCount++;
        total += objectDataAll[property].length;
        const struct = {
          pdam: property,
          totalData: objectDataAll[property].length,
        };
        summaryData.push(struct);
      }
      // count allData
      const allData = {
        pdam: 'total',
        totalData: total,
      }
      summaryData.push(allData);
      csvWriterSummary(summaryData, assetsFolder);
      resolve('Process Finished')
    });
  })
  

};

module.exports = csvGeneratorV2;
