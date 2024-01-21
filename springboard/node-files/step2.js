const fs=require('fs');
const axios=require('axios')

function cat (path){
  fs.readFile(path,'utf8',function(err,data){

  if(err){
    console.log('error',err)
    process.kill(1)
  }
  console.log(data)
});

}

async function webCat (url){
 const response=await axios.get(url)
console.log(response.data)
}

let arg = process.argv[2].slice(0,4)
if (arg=='http'){
  webCat(process.argv[2])

} else {
 cat(process.argv[2])
}




