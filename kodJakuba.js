const fs = require("fs");
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let name, surname, age;
rl.question("Podaj imię: ", (myName) => {
  name = myName;
  rl.question("Podaj nazwisko: ", (mySurname) => {
    surname = mySurname;
    rl.question("Podaj wiek: ", (myAge) => {
      age = myAge;
      fs.mkdir("./documents", (err) => {
        if (err) throw err;
      });
      fs.writeFile(
        `./documents/${name}_${surname}.txt`,
        `Imię: ${name}, Nazwisko: ${surname}, Wiek: ${age}`,
        (err) => {
          if (err) throw err;
        }
      );
      rl.close();
    });
  });
});