const data = {
    "xavier": [
        { "audio": "sounds/xavier1.mp3", "text": "You're touching a dangerous spot." },
        { "audio": "sounds/xavier2.mp3", "text": "I'm wounded." },
        { "audio": "sounds/xavier3.mp3", "text": "You need to learn how to take responsibility for your actions." }
    ],
    "rafayel": [
        { "audio": "sounds/rafayel1.mp3", "text": "welcome" },
        { "audio": "sounds/rafayel2.mp3", "text": "see you" }
    ],
    "erik": [
        { "audio": "erik1.mp3", "text": "hey there" },
        { "audio": "erik2.mp3", "text": "bye now" }
    ]
};

const urlParams = new URLSearchParams(window.location.search);
const characterId = urlParams.get('character');
const index = characterId === "xavier" ? 1 : characterId === "rafayel" ? 2 : 3;

console.log(characterId)

// Create the HTML structure
document.body.innerHTML = `
    <audio id="audioPlayer"></audio>

    <div class="background${characterId}-image">
    </div>
    <div class="character-center">
        <img src="images/${characterId}.png" alt="${characterId}" class="character-image" id="${characterId}">
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
        favorabilityHeight += maxFavorabilityHeight*1;
        if (favorabilityHeight > maxFavorabilityHeight) {
            favorabilityHeight = maxFavorabilityHeight;
        }
        currentFavorabilityBar.style.height = `${favorabilityHeight}px`;
    }

    if (favorabilityHeight == maxFavorabilityHeight) {
        const characterCenter = document.querySelector(`.character-center`);
        
        // const heart = document.createElement('div');
        // heart.textContent = '❤️';
        const heart = document.createElement('img');
        heart.src = `images/${characterId}Q.png`;
        heart.classList.add('heart-animation');
        
        characterCenter.appendChild(heart);
        
        setTimeout(() => {
            characterCenter.removeChild(heart);
        }, 2000);
    }

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

