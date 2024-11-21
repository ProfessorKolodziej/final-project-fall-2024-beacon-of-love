const gameContainer = document.querySelector("#game-1-container .container"),
userResult = document.querySelector("#game-1-container .user-result img"),
xavierResult = document.querySelector("#game-1-container .xavier-result img"),
result = document.querySelector("#game-1-container .result"),
optionImages = document.querySelectorAll("#game-1-container .option_image");

console.log(gameContainer, userResult, xavierResult, result, optionImages)


optionImages.forEach((image,index)=> {
    image.addEventListener("click",(e) => {
        image.classList.add("active");

        optionImages.forEach((image2,index2) => {
            index !== index2 && image2.classList.remove("active");

        })
        let imageSrc = e.target.querySelector('img').src;
        userResult.src = imageSrc;

        let randomNumber = Math.floor(Math.random() * 3);
        let xavierImages = ["images/rock.png", "images/paper.png", "images/scissor.png"];
        xavierResult.src = xavierImages[randomNumber];
        let xavierValue = ['R','P', 'S'][randomNumber];
        let userValue = ["R","P", "S"][index];

        let outcomes = {
            RR: "Draw",
            PR: "Xavier",
            SR: "User",
            PP: "Draw",
            RP: "User",
            SP: "Xavier",
            SS: "Draw",
            RS: "Xavier",
            PS: "User"
        }

        let outComeValue = outcomes[userValue + xavierValue]
        result.textContent = userValue === xavierValue ? "Match Draw" : `${outComeValue} Won!!`;
    });
})