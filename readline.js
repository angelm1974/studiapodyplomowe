const rl=
    require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
rl.question('Podaj imię: ', (imie) => {
    console.log(`Witaj ${imie}`);
    rl.question('Podaj nazwisko: ', (nazwisko) => {
        console.log(`Witaj ${imie} ${nazwisko}`);
        rl.question('Podaj wiek: ', (wiek) => {
            console.log(`Witaj ${imie} ${nazwisko} ${wiek}`);
            rl.close();
        });
    });
});
