const fs = require("fs");

function csvAddHeader(folderPath, csvPath) {
  const csv = fs.readFileSync(csvPath);
  const csvPathArray = csvPath.split('/');

  const dataToWrite = `id,pdam,noHp,email,noSamb,nama,tglJoin,flag
${csv}
  `

  const newFilePath = `${folderPath}/${csvPathArray[csvPathArray.length-1]}-headerAdded.csv`;
  return new Promise((resolve, reject) => {
    fs.writeFile(newFilePath, dataToWrite, 'utf8', function (err) {
      if (err) {
        reject('Some error occured - file either not saved or corrupted file saved.', err);
      } else{
        resolve(newFilePath);
      }
    });
  })
}

module.exports = csvAddHeader;

// csvAddHeader('/Users/fikriamri/Documents/', '/Users/fikriamri/Documents/Fikri/Alterra/ProductManagement/PDAMInfo/csv_generator/userpelanggan18062021raw.csv')