// Extract the characterId from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const characterId = urlParams.get('character');
const index = characterId === "xavier" ? 1 : characterId === "rafayel" ? 2 : 3;

// generate the HTML content

document.body.innerHTML = `
    <div id="game-${index}-container">
        <div class="back-container">
            <a href="character.html?character=${characterId}" class="back-button">Back</a>
        </div>
        <section class="container">
            <div class="result_field">
                <div class="result-images">
                    <span class="${characterId}-result">
                        <img src="images/rock.png" alt=""/>
                    </span>
                    <span class="user-result">
                        <img src="images/rock.png" alt=""/>
                    </span>
                </div>
                <div class="result">Let's Play!!</div>
            </div>
            <img src="images/${characterId}Q.png" alt="${characterId}Q" class="game-character ${characterId}-q">
            <img src="images/meq.png" alt="MeQ" class="game-character me-q">
            <div class="option_images">
                <span class="option_image">
                    <img src="images/rock.png" alt="Rock"/>
                    <p>Rock</p>
                </span>
                <span class="option_image">
                    <img src="images/paper.png" alt="Paper"/>
                    <p>Paper</p>
                </span>
                <span class="option_image">
                    <img src="images/scissor.png" alt="Scissor"/>
                    <p>Scissor</p>
                </span>
            </div>
        </section>
    </div>
`;
