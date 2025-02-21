const eightBall =
    document.querySelector("main #ball");
const answerText =
    document.querySelector("#ball #answer .answerText");
const answerDiv =
    document.querySelector("#ball #answer");
const questionInput =
    document.querySelector("main .questionBox input");

const answers = [
    "Yes, definitely.",
    "Yes, definitely.",
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Signs point to yes.",
    "Yes.",
    "Reply hazy, try again.",
    "Ask again later",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't bet on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
];

const questionTable = 
    document.querySelector("footer #questionAnswerTable");
const tableBody = 
    document.querySelector("footer #questionAnswerTable tbody");

eightBall.addEventListener("click", () => {
    const question = questionInput.value.trim();
    let answer;
    if (question === "") {
        answer = "I can't tell with that information.";
    } else {
        const randomIndex = 
            Math.floor(Math.random() * answers.length);
        answer = answers[randomIndex];
    }
    eightBall.classList.add("shake");
    answerDiv.style.animation = "colorChange 1s";
    answerText.style.animation = "fadeOut 1s";
    setTimeout(() => {
        answerText.innerText = "";
        answerDiv.classList.add("answerDisplayed");
    }, 700);


    setTimeout(() => {
        eightBall.classList.remove("shake");
        answerText.innerText = answer;
        answerText.style.animation = "fadeIn 1s";
        setTimeout(() => {
            answerText.style.animation = "";
        }, 700);
        if (question !== "") {
            const row = document.createElement("tr");
            const questionCell = document.createElement("td");
            const answerCell = document.createElement("td");
            questionCell.textContent = question;
            answerCell.textContent = answer;
            row.appendChild(questionCell);
            row.appendChild(answerCell);
            tableBody.appendChild(row);
            questionTable.style.display = "block";
        }
    }, 1500);
});
