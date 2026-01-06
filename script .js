const fs  = required("fs");
const data = fs.readfilesync("input.txt","utf8");
fs.writefilesync("output.txt",data);
console.log("file read and written  successfully");