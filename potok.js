let fs =require('fs')
let readable = fs.createReadStream('geckodriver.log')
let writable = fs.createWriteStream('geckodriver3.log')
readable.pipe(writable)