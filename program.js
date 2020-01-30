const  process=require('process')
let som=0;
for(let i=2; i<process.argv.length; i++)
som += (+process.argv[i])
console.log(som)