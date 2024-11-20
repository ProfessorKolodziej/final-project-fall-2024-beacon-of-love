// 获取页面元素
const resultText = document.getElementById("result-text");
const playerResult = document.getElementById("player-result");
const xavierResult = document.getElementById("xavier-result");

const choices = ["Rock", "Paper", "Scissors"];

// 玩家选择
function makeChoice(playerChoice) {
    // Xavier 随机选择
    const xavierChoice = choices[Math.floor(Math.random() * choices.length)];

    // 更新选择结果到页面
    playerResult.textContent = playerChoice;
    xavierResult.textContent = xavierChoice;

    // 计算结果并显示
    const result = determineWinner(playerChoice, xavierChoice);
    resultText.textContent = result;
}

// 判断胜负
function determineWinner(playerChoice, xavierChoice) {
    if (playerChoice === xavierChoice) {
        return "It's a Tie!";
    } else if (
        (playerChoice === "Rock" && xavierChoice === "Scissors") ||
        (playerChoice === "Paper" && xavierChoice === "Rock") ||
        (playerChoice === "Scissors" && xavierChoice === "Paper")
    ) {
        return "You Win!";
    } else {
        return "Xavier Wins!";
    }
}
