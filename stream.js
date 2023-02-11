let fs =require('fs')
let readStream = fs.createReadStream('geckodriver.log')
let writeStream = fs.createWriteStream('geckodriver2.log')
let data = ''


readStream.on('readable', () => {
    let chunk
    while (null !== (chunk = readStream.read())) {
            console.log(`Read ${chunk.length} bytes of data...`);
            writeStream.write(chunk)
          }
});

readStream.on('end', () => {
    console.log(data)
});
