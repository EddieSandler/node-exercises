const fs=require('fs');


function cat (path){
  fs.readFile(path,'utf8',function(err,data){

  if(err){
    console.log('error',err)
    process.kill(1)
  }
console.log(data)

})

}
cat(process.argv[2])
