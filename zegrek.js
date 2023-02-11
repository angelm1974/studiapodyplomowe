    let zegarek =0
    mojint=setInterval(() => {
        console.log(
            new Date().toLocaleString());
            zegarek++
            if (zegarek == 10) {
                clearInterval(mojint)
            }
        }, 1000);
