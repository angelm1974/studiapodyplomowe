const fs = require('fs');
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
let filePath;
let content;
rl.question('Podaj imię ', (imie)=>{
    console.log(`Witaj ${imie}`);
    rl.question('Podaj nazwisko ', (nazwisko)=>{
        console.log(`Witaj ${imie} ${nazwisko}`);
        rl.question('Podaj wiek ', (wiek)=>{
            filePath = `${imie}_${nazwisko}_${wiek}.txt`
            content = `Witaj ${imie} ${nazwisko}, masz ${wiek} lat`
            fs.mkdir('./Customer', err =>{
                fs.writeFile(`./Customer/${filePath}`,content, err =>{
                    if (err) throw err; {
                        console.log(`${filePath} - save.`)
                    }
                })
            })
            rl.close();
        });
    });
});