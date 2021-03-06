// File atau folder ini perlu dimasukan ke Github-ku
const csv = require('csv-parser');
const fs = require('fs');
const csvWriter = require('./csvWriter');
const csvWriterSummary = require('./csvWriterSummary');

function csvGenerator(folderPath, sourceFile) {
  let data = [];
  let total = 0;
  let pdamName = 'first'
  let pdamCount = 0;
  let totalData = 0;
  const summaryData = [];
  const message = '<div class=""> <div class="aHl"></div><div id=":1a8" tabindex="-1"></div><div id=":19x" class="ii gt"> <div id=":19w" class="a3s aiL msg-7811150528595318306"><u></u> <div style="padding:0!important;margin:0!important;display:block!important;min-width:100%!important;width:100%!important;background:#ffffff"> <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff"> <tbody> <tr> <td align="center" valign="top" style="padding:30px 0px 30px 0px"> <table width="650" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td style="width:650px;min-width:650px;font-size:0pt;line-height:0pt;margin:0;font-weight:normal;Margin:0"> <div style="border:1px solid #d0d0d0;border-radius:6px"> <table style="border-radius:6px" width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td> <table width="100%" border="0" style="border-radius:6px" cellspacing="0" cellpadding="0" bgcolor="#ffffff"> <tbody> <tr> <td> <table width="100%" border="0" style="border-radius:6px" cellspacing="0" cellpadding="0"> <tbody> <tr> <th style="font-size:0pt;line-height:0pt;padding:0;margin:0;font-weight:normal;vertical-align:top;Margin:0"> <table width="100%" border="0" style="border-radius:6px" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="30"></td><td style="padding-top:30px"> <div style="font-size:0pt;line-height:0pt;text-align:left"> <div style="font-size:0pt;line-height:0pt"> <a href="#m_-7811150528595318306_"> <img src="https://ci4.googleusercontent.com/proxy/xqLpKVBL9oejKuQtVSTr_9ROgGbCAJ0fZCVksDvtHrjXv7DBfNpS-fH7oOwXYlvUE4sGyJ22OaBpvin1R1kwyzbgOurICr5Dhb0be6YCd9It4Af0EY0MgDJZ8goH52Z0mFvk=s0-d-e1-ft#https://drive.google.com/uc?export=download&amp;id=16HZNVbyXIBGYLuqaCwSwKND0iH5_vHXL" border="0" width="138px" alt="" class="CToWUd"> </a> </div></div></td><td width="20"></td></tr></tbody> </table> </th> <th style="font-size:0pt;line-height:0pt;padding:0;margin:0;font-weight:normal;vertical-align:top;Margin:0" width="294"> <table width="100%" border="0" style="border-radius:6px" cellspacing="0" cellpadding="0"> <tbody> <tr> <td> <div style="font-size:0pt;line-height:0pt;text-align:left"> <img src="https://ci3.googleusercontent.com/proxy/8XN29QkhoiG-XuFs4ucT9hNRBG1M7xDb2rWo_nMXkxLus7rYYnCxgk9oZA-b_SC6JfEieQjzRKSMHohjul5T9of1AvgjU4nwgDe5xsH3ZMbr4tQau_limB7DPsuTYrZvJMWV=s0-d-e1-ft#https://drive.google.com/uc?export=download&amp;id=1CQrf6Tca1yWLWm7EDvM1c8g9nXXp4lvI" border="0" width="300px" alt="" class="CToWUd"> </div></td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> <table style="border-radius:6px" width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff"> <tbody> <tr> <td style="padding:0px 0px 10px 0px"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td style="padding:24px 15px 0px 15px" align="center"> <table cellspacing="0" cellpadding="0" style="padding:13px 40px 13px 40px;"> <tbody> <tr> <td style="color:#000000;font-family:Roboto,serif;font-size:14px;line-height:21px;text-align:center"> <p style="font-size: 16px;font-weight:bold">Halo, Pelanggan Setia PDAM!</p></td></tr></tbody> </table> </td></tr></tbody> </table> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td style="text-align:center"> <img src="https://i.ibb.co/L8s76cV/photo-2021-03-18-15-59-59.jpg" width="500px" alt="" class="CToWUd a6T" tabindex="0"> <div class="a6S" dir="ltr" style="opacity: 0.01; left: 544px; top: 246px;"> <div id=":1i4" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" title="Download" role="button" tabindex="0" aria-label="Download attachment " data-tooltip-class="a1V"> <div class="akn"> <div class="aSK J-J5-Ji aYr"></div></div></div></div></td></tr><tr> <td style="padding-bottom:20px"></td></tr></tbody> </table> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td style="text-align:center"> <img src="https://i.ibb.co/mGyFZ0T/photo-2021-03-18-16-00-02.jpg" width="500px" alt="" class="CToWUd a6T" tabindex="0"> <div class="a6S" dir="ltr" style="opacity: 0.01; left: 544px; top: 246px;"> <div id=":1i4" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" title="Download" role="button" tabindex="0" aria-label="Download attachment " data-tooltip-class="a1V"> <div class="akn"> <div class="aSK J-J5-Ji aYr"></div></div></div></div></td></tr><tr> <td style="padding-bottom:20px"></td></tr></tbody> </table> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td style="padding:0px 15px 0px 15px" align="center"> <table cellspacing="0" cellpadding="0" style="padding:13px 40px 13px 40px;"> <tbody> <tr> <td style="color:#000000;font-family:Roboto,serif;font-size:14px;line-height:21px;text-align:center"> Setelah gajian adalah waktu yang paling tepat untuk bayar tagihan. <br><br>Segera bayarkan tagihan air Anda di aplikasi PDAM Info melalui metode pembayaran mulai dari Bank Transfer Mandiri, BNI, Virtual Account Permata, BRI, OVO, ShopeePay, hingga QRIS. <br><br>Cara bayarnya mudah, pilihan metodenya beragam. </tr></tbody> </table> </td></tr></tbody> </table> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td style="padding:15px 15px 24px 15px" align="center"> <table cellspacing="0" cellpadding="0" style="padding:13px 40px 13px 40px;"> <tbody> <tr> <td> <style>a:hover{background-color: #000000;}</style> <a href="https://play.google.com/store/apps/details?id=id.co.limasakti.pdaminfo" style="padding: 10px 15px; background-color: #20459D; color: #FFFFFF; text-decoration: none; border-radius: 20px; font-size: 16px;"> Bayar Sekarang </a> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> <table style="border-radius:6px" width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f4f4f5"> <tbody> <tr> <td style="padding:13px 20px 13px 20px"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td style="text-align:center"> <img src="https://ci6.googleusercontent.com/proxy/cib4l5ulrG3FcRWDxQpwiCoGkwcPCse5A9FyO9MHS6rj58W1a2AgkmP18RvEl1UdXV8mdL0KU-WecyRzD9E4eE59BQUM4F1vXRnPs4_-ZVqj1Mu5UIKB91rJ9utO6-el4hCm=s0-d-e1-ft#https://drive.google.com/uc?export=download&amp;id=1PBbcv7s8u3RWYPVyAjBN1cRVUsb8znWI" border="0" width="119px" alt="" class="CToWUd"> </td></tr><tr> <td style="padding-bottom:20px"></td></tr></tbody> </table> </td></tr></tbody> </table> </div></td></tr></tbody> </table> </td></tr></tbody> </table> </div><div class="yj6qo"></div><div class="adL"> </div></div></div><div id=":1ac" class="ii gt" style="display:none"> <div id=":1ad" class="a3s aiL undefined"></div></div><div class="hi"></div></div>';
  const folderName = folderPath;
  const subject = 'Sudah Gajian? Saatnya Bayar Tagihan!';
  
  if (!fs.existsSync(folderName)){
    fs.mkdirSync(folderName);
  }
  
  fs.createReadStream(sourceFile)
    .pipe(csv())
    .on('data', (row) => {
      totalData++;
      // Nanti proses ini bisa diubah juga jadi mengisi sebuah object yang berisi nama-nama object. Dengan begitu jadi tidak perlu melakukan sort dulu di google sheet
      if (pdamName !== row.pdam) {
        // count data per PDAM
        const struct = {
          pdam: pdamName,
          totalData: data.length,
        };
        summaryData.push(struct);
        total += data.length;
  
        // basic function
        csvWriter(pdamName.replace(/\s/g, ""), data, folderName);
        pdamName = row.pdam;
        data = [];
        const temp = {
          to: row.email,
          subject: subject,
          message: message,
          sender: 'PDAM Info',
          from: 'pdaminfo@bsa.id',
        };
        data.push(temp);
        pdamCount++
      } else {
        const temp = {
          to: row.email,
          subject: subject,
          message: message,
          sender: 'PDAM Info',
          from: 'pdaminfo@bsa.id',
        };
        data.push(temp);
      }
    })
    .on('end', () => {
      // basic function
      csvWriter(pdamName.replace(/\s/g, ""), data, folderName);
      console.log('CSV file successfully processed');
      console.log(`Total data: ${totalData}\nTotal PDAM: ${pdamCount}`);
  
      // count data per PDAM
      const struct = {
        pdam: pdamName,
        totalData: data.length,
      };
      summaryData.push(struct);
      total += data.length;
  
      // count allData
      const allData = {
        pdam: 'total',
        totalData: total,
      }
      summaryData.push(allData);
      csvWriterSummary(summaryData, folderName);
    });

}

module.exports = csvGenerator;
