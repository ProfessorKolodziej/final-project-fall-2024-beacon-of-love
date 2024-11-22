 // Game-1-------------------------------------------------------------------------------------
const gameContainer = document.querySelector("#game-1-container .container"),
userResult = document.querySelector("#game-1-container .user-result img"),
xavierResult = document.querySelector("#game-1-container .xavier-result img"),
result = document.querySelector("#game-1-container .result"),
optionImages = document.querySelectorAll("#game-1-container .option_image");


optionImages.forEach((image,index) => {
    image.addEventListener('click', (e) => {
      image.classList.add('active')
  
      userResult.src = xavierResult.src = 'images/rock.png'
      result.textContent = 'Wait...'
      optionImages.forEach((image2, index2)=>{
        // console.log(index, index2)
        index !== index2 &&  image2.classList.remove('active')
      })
  
      gameContainer.classList.add('start')

      let time = setTimeout(() => {
        let imageSrc = e.target.querySelector('img').src
        userResult.src = imageSrc
        gameContainer.classList.remove('start')
   
        let randomNumber = Math.floor(Math.random() * 3)
       //  console.log(randomNumber)
   
       let xavierImages = ["images/rock.png", "images/paper.png", "images/scissor.png"]
       xavierResult.src = xavierImages[randomNumber]
   
       let xavierValue = ['R', 'P', 'S'][randomNumber]
   
       let useValue = ['R', 'P', 'S'][index]
      
       // create an object with all possible outcomes
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
   
       // look up the outcome value based on user and CPU options
       let outComeValue = outcomes[xavierValue  + useValue]
   
        // console.log(cpuValue, useValue)
       //  console.log(outComeValue)
       result.textContent = xavierValue === useValue ? 'Match Draw' : `${outComeValue} Won!!`
      }, 2500);
    })
  })

// Game-2-------------------------------------------------------------------------------------

const gameContainer2 = document.querySelector("#game-2-container .container");

  if (gameContainer2) {
      const userResult = document.querySelector("#game-2-container .user-result img"),
          rafayelResult = document.querySelector("#game-2-container .rafayel-result img"),
          result = document.querySelector("#game-2-container .result"),
          optionImages = document.querySelectorAll("#game-2-container .option_image");
  
      optionImages.forEach((image, index) => {
          image.addEventListener("click", (e) => {
              image.classList.add("active");
  
              userResult.src = rafayelResult.src = "images/rock.png";
              result.textContent = "Wait...";
              optionImages.forEach((image2, index2) => {
                  index !== index2 && image2.classList.remove("active");
              });
  
              gameContainer2.classList.add("start");
  
              let time = setTimeout(() => {
                  let imageSrc = e.target.querySelector("img").src;
                  userResult.src = imageSrc;
                  gameContainer2.classList.remove("start");
  
                  let randomNumber = Math.floor(Math.random() * 3);
  
                  let rafayelImages = ["images/rock.png", "images/paper.png", "images/scissor.png"];
                  rafayelResult.src = rafayelImages[randomNumber];
  
                  let rafayelValue = ["R", "P", "S"][randomNumber];
  
                  let useValue = ["R", "P", "S"][index];

                  let outcomes = {
                      RR: "Draw",
                      PR: "Rafayel",
                      SR: "User",
                      PP: "Draw",
                      RP: "User",
                      SP: "Rafayel",
                      SS: "Draw",
                      RS: "Rafayel",
                      PS: "User",
                  };

                  let outComeValue = outcomes[rafayelValue + useValue];
  
                  result.textContent =
                      rafayelValue === useValue ? "Match Draw" : `${outComeValue} Won!!`;
              }, 2500);
          });
      });
  }
  
 // Game-3-------------------------------------------------------------------------------------
  const gameContainer3 = document.querySelector("#game-3-container .container");

  if (gameContainer3) {
      const userResult = document.querySelector("#game-3-container .user-result img"),
          erikResult = document.querySelector("#game-3-container .erik-result img"),
          result = document.querySelector("#game-3-container .result"),
          optionImages = document.querySelectorAll("#game-3-container .option_image");
  
      optionImages.forEach((image, index) => {
          image.addEventListener("click", (e) => {
              image.classList.add("active");
  
              userResult.src = erikResult.src = "images/rock.png";
              result.textContent = "Wait...";
              optionImages.forEach((image2, index2) => {
                  index !== index2 && image2.classList.remove("active");
              });
  
              gameContainer3.classList.add("start");
  
              let time = setTimeout(() => {
                  let imageSrc = e.target.querySelector("img").src;
                  userResult.src = imageSrc;
                  gameContainer3.classList.remove("start");
  
                  let randomNumber = Math.floor(Math.random() * 3);
  
                  let erikImages = ["images/rock.png", "images/paper.png", "images/scissor.png"];
                  erikResult.src = erikImages[randomNumber];
  
                  let erikValue = ["R", "P", "S"][randomNumber];
  
                  let useValue = ["R", "P", "S"][index];
     
                  let outcomes = {
                      RR: "Draw",
                      PR: "Erik",
                      SR: "User",
                      PP: "Draw",
                      RP: "User",
                      SP: "Erik",
                      SS: "Draw",
                      RS: "Erik",
                      PS: "User",
                  };

                  let outComeValue = outcomes[erikValue + useValue];
  
                  result.textContent =
                      erikValue === useValue ? "Match Draw" : `${outComeValue} Won!!`;
              }, 2500);
          });
      });
  }
  

// 对话
const characters = document.querySelectorAll(".character-image");
const dialogBox = document.getElementById("dialog-box");

characters.forEach((character) => {
    character.addEventListener("click", () => {
        const dialog = character.getAttribute("data-dialog");
        dialogBox.textContent = dialog;
        dialogBox.classList.remove("hidden");
        setTimeout(() => {
            dialogBox.classList.add("hidden");
        }, 2000);
    });
});

characters.forEach((character) => {
    character.addEventListener("click", () => {
        const dialog = character.getAttribute("data-dialog");
        const audioSrc = character.getAttribute("data-audio");

        dialogBox.textContent = dialog;
        dialogBox.classList.remove("hidden");

        const audio = new Audio(audioSrc);
        audio.play();

        setTimeout(() => {
            dialogBox.classList.add("hidden");
        }, 2000);
    });
});

