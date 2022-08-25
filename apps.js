const initgame = () => {
    let randomobj = words[ Math.floor(Math.random() * words.length)];
    console.log(randomobj);
    letwordArray = randomobj.word.split("");
}

initgame()