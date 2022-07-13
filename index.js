const fs = require('fs');
const path = require('path');

const input = process.argv;
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;

// if (input[2] == 'add') {
//     fs.writeFileSync(input[3],input[4])
// }
// else if (input[2] == 'remove') {
//     fs.unlinkSync(input[3])
// }
// else {
//     console.log('invalid input');
// }
// console.log(dirPath);
// for (i=0; i<5; i++) {
//     fs.writeFileSync(dirPath + "/Hello" + i + ".txt", "a simple text file")
// }

// fs.readdir(dirPath,(err,files) => {
//     console.log(files);
// })
// fs.writeFileSync(filePath,"This is a simple file.")
// fs.readFile(filePath,'utf8',(err,item)=> {
//     console.log(item);
// })
// fs.appendFile(filePath," The name of file is apple.txt",(err)=> {
//     if (!err) console.log("File is updated");
// })

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=> {
//     if (!err) console.log("File name is updated");
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`)