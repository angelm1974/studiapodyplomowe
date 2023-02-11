let zdarzenenie = require('events')
let emiter = new zdarzenenie.EventEmitter()
emiter.on('zdarzenie', powitanie)
emiter.once('rejestruj', function() {
    console.log('Zarejestrowano użytkownika')
})

function powitanie() {
    console.log('Witaj nowy użytkowniku!!!')
}


emiter.emit('rejestruj')

emiter.emit('zdarzenie')
emiter.emit('zdarzenie')
emiter.emit('rejestruj')