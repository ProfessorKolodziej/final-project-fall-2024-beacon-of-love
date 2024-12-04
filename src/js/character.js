const data = {
    "xavier": [
        { "audio": "sounds/xavier1.mp3", "text": "You're touching a dangerous spot." },
        { "audio": "sounds/xavier2.mp3", "text": "I'm wounded." },
        { "audio": "sounds/xavier3.mp3", "text": "You need to learn how to take responsibility for your actions." }
    ],
    "rafayel": [
        { "audio": "sounds/rafayel1.mp3", "text": "Many paths are worthed exploring, even have they all must end." },
        { "audio": "sounds/rafayel2.mp3", "text": "You always insist on touching my face." },
        { "audio": "sounds/rafayel3.mp3", "text": "Did you eat all the snacks we bought?" }
    ],
    "erik": [
        { "audio": "sounds/erik1.mp3", "text": "Did you detect anomalous with my heartbeat?" },
        { "audio": "sounds/erik2.mp3", "text": "Aren't you tired of being in that position? You can come a little closer." },
        { "audio": "sounds/erik3.mp3", "text": "If you don't want to choose, we can decide through a game of rock paper scissors, do you want to represent hotpot or barbecue?" }
    ]
};

const urlParams = new URLSearchParams(window.location.search);
const characterId = urlParams.get('character');
const index = characterId === "xavier" ? 1 : characterId === "rafayel" ? 2 : 3;

console.log(characterId)

// Create the HTML structure
document.body.innerHTML = `
    <audio id="audioPlayer"></audio>
    <p class="Touch">Touch him!</p>

    <div class="background${characterId}-image">
    </div>
    <div class="character-center">
        <img src="images/${characterId}.png" alt="${characterId}" class="characters-image" id="${characterId}">
        <div class="chat-container" id="chat-container"></div>
    </div>
    <div class="aside">
        <a href="choose.html" class="quit-button">Quit</a>

        <div class="favorability-container">
            <div class="favorability-bar${index}"></div>
            <div class="current-favorability-bar${index}"></div>
        </div>
        <p class="favorability-text">Favorability</p>
        <a href="game.html?character=${characterId}" class="game-button">Game</a>
    </div>
`;

let favorabilityHeight = 0;
const maxFavorabilityHeight = 456;
const currentFavorabilityBar = document.querySelector(`.current-favorability-bar${index}`);
console.log(currentFavorabilityBar);


const characterElement = document.getElementById(characterId);
const chatContainer = document.getElementById('chat-container');

const handleClick = () => {
    const audioList = data[characterId];
    const randomAudioData = audioList[Math.floor(Math.random() * audioList.length)];
    const audio = new Audio(randomAudioData.audio);

    characterElement.removeEventListener('click', handleClick);

    if (favorabilityHeight < maxFavorabilityHeight) {
        favorabilityHeight += maxFavorabilityHeight*0.2;
        if (favorabilityHeight > maxFavorabilityHeight) {
            favorabilityHeight = maxFavorabilityHeight;
        }
        currentFavorabilityBar.style.height = `${favorabilityHeight}px`;
    }

   // if (favorabilityHeight == maxFavorabilityHeight) {
       // const characterCenter = document.querySelector(`.character-center`);
        
        // const heart = document.createElement('div');
        // heart.textContent = '❤️';
        //const heart = document.createElement('img');
       // heart.src = `images/heart.jpg`;
       // heart.classList.add('heart-animation');
        
       // characterCenter.appendChild(heart);
        
       // setTimeout(() => {
           // characterCenter.removeChild(heart);
       // }, 2000);
   // }

    audio.play();

    chatContainer.innerHTML = `<p class="chat-text">${randomAudioData.text}</p>`;
    chatContainer.style.display = 'block';

    audio.onended = () => {
        characterElement.addEventListener('click', handleClick);
        chatContainer.style.display = 'none';
    };
};

// Add initial event listener
characterElement.addEventListener('click', handleClick);

