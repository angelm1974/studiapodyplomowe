const fs = require('fs');

// fs.readdirSync('./').forEach(file => {
//   console.log(file);
// });

// fs.readFile('./zdarzenieSerwer.js', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     });
fs.mkdir('./dokumenty', err => {
fs.writeFile('./dokumenty/test.txt', 'Hello Node.js', err => {
    if (err) throw err;
    console.log('Zapisano!');
}
);  
});
