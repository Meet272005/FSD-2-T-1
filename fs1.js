const fs = require('fs')
// fs.mkdirSync("node");
// fs.writeFileSync('node/rw.txt', 'Hello')
// fs.appendFileSync('node/rw.txt', '\nWelcome')
// data = fs.readFileSync('node/rw.txt', 'utf-8')
// console.log(data)
// // OR
// // data = fs.readFileSync('node/rw.txt')
// // console.log(data.toString())
// fs.renameSync('node/rw.txt', 'node/test.txt')
// fs.unlinkSync('node/test.txt')
// fs.appendFileSync('node/rw.txt', '50 -1 99 100 60 71 0 -2')
// data = fs.readFileSync('node/rw.txt', 'utf-8').split(' ').sort((a,b)=>a-b)
// console.log(data)
fs.writeFileSync('node/s.txt', 'Hello')
d = fs.readFileSync('node/s.txt', 'utf-8')
fs.unlinkSync('node/s.txt')
fs.writeFileSync('node/d.txt', 'Hello')
fs.appendFileSync('node/d.txt', ' Students')
