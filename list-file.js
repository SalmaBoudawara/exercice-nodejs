const fs = require('fs');
fs.readdir(process.argv[2],(err, list)=>{
if (err) throw err;
  console.log(list.filter(el=>el.includes('.md')).join('\n'));
});