const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord,timer;

const initTimer = maxTime => {
    timer= setInterval(() => {
        if(maxTime>0){
            maxTime--; // decrement maxTime by -1
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert('Time Off ! ${correctWord.toUpperCase()} was the correct word');
        initGame();//calling initGame function,so the game restarts
    }, 1000);
}





const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random()* words.length)];//getting random objects from the words
    let wordArray = randomObj.word.split("");//splitting each letter of random word
    for(let i= wordArray.length - 1; i>0;i--){
        let j = Math.floor(Math.random() * (i+1));//getting random number
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }

    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength",correctWord.length);
    console.log(randomObj);
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord ) return alert("Please enter a word check");
    if(userWord !== correctWord) return alert('Oops ! ${userWord} is not a correct word')
    alert("Congrats ! ${userWord} is a correct word");
    initGame();
}




refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click",checkWord)

