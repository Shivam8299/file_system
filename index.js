//! Reading a File:
//! Write a JavaScript program that reads the content of a text file named ""example.txt"" using the fs
//! module and logs the content to the console."

// TODO ++++++++++++++++++ write file in async method ++++++++++++++++++++++++++++


// const fs = require('fs')
// const text = 'this is example text file'
// fs.writeFile('example.txt',text,(err)=>{
//     if(!err){
//         console.log("file has been successfully created")
//     }
//     else{
//         console.log("something went wrong")
//     }
// })

// TODO ++++++++++++++++++ write file in sync ++++++++++++++++++++++++++++

// const fs = require("fs")
// const text = 'this is example text file by sync method'
// fs.writeFileSync("example2.txt",text)



// TODO ++++++++++++++++++ read file in async ++++++++++++++++++++++++++++

// const fs = require('fs')
// fs.readFile("example.txt","utf8",(err,data)=>{
//     if(!err){
//         console.log(data);
//     }
//     else{
//         console.log("something went wrong");
//     }
// })



// TODO ++++++++++++++++++ read file in sync ++++++++++++++++++++++++++++

// const fs = require('fs')
// try{
// const data = fs.readFileSync('example2.txt','utf8');
//     console.log(data)
//     console.log('file has been read successfully!');
// }
// catch(err){
//     console.log(`error reading the file ${err}`)
// }
   
// TODO ++++++++++++++++++ append file in async ++++++++++++++++++++++++++++

// const fs = require('fs')
// const newText = ' as a demo'
// fs.appendFile('example.txt',newText, (err)=>{
//     if(!err){
//             console.log("text appended successfully.")
//     }
//     else{
//         console.log(err);
//     }
// })


// TODO ++++++++++++++++++ append file in sync ++++++++++++++++++++++++++++

// const fs = require('fs');
// const newText = ' as a demo';

// try {
//   fs.appendFileSync('example2.txt', newText);
//   console.log('Text appended successfully.');
// } catch (err) {
//   console.error(err);
// }

// TODO ++++++++++++++++++ checking file exit or not sync ++++++++++++++++++++++++++++

// const fs = require('fs')
// const file = 'abd.txt'
// if(fs.existsSync(file)){
//     console.log(`this file ${file} exit`)
// }
// else {
//     console.log(`this file ${file} does not exit`)
// }


// TODO ++++++++++++++++++ cheate directory ++++++++++++++++++++++++++++

// const fs = require('fs')
// fs.mkdir('Node.js',(err)=>{
//     if(err){
//         console.log(`error creating directory ${err}`);
//     }
//     else{
//         console.log(`dir. created succesfully`)
//     }
// })


l