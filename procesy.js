// console.log(process.argv)

process.stdout.write('Dzień dobry, proszę podać swoje imię:\n')
process.stdin.on('data', function(data) {
    process.stdout.write('Witaj ' + data.toString())
    process.exit()
});