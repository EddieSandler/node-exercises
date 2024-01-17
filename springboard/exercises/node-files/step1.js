const fs=require('fs');
const process = require('node:process');

function cat(fileName){
fs.readFile(path,'utf8',function(err,data) {
  if(err) { throw err
  process.exit(1)
  }
  console.log(`${data}`)
})
}
cat(process.argv[2])