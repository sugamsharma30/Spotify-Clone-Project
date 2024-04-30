const playButtons = document.querySelectorAll(".playmusic");
const audioPlayers = document.querySelectorAll("audio");
const cards = document.querySelectorAll(".card");

playButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (audioPlayers[index].paused) {
            audioPlayers.forEach((player, i) => {
                if (i !== index) {
                    player.pause();
                    cards[i].classList.remove("animation1");
                }
            });

            audioPlayers[index].play();
            cards[index].classList.add("animation1");

            audioPlayers[index].addEventListener("ended", () => {
                cards[index].classList.remove("animation1");
            });
        } else {
            audioPlayers[index].pause();
            cards[index].classList.remove("animation1");
        }
    });
});
