function pokaz(callback){
    console.log("Rozpoczynamy działanie funkcji pokaz");
    callback();
    console.log("program leci dalej");
}

pokaz(function(){
    setTimeout(printCos, 2000)
    });

function printCos() {
        console.log("To jest funkcja wywołana jako callback")
    }