let blushClicks = 0;

function blushClick() {
    blushClicks++;
    if (blushClicks === 5) {
        const blushy = document.getElementById("blushy");
        const sound = document.getElementById("blushSound");

        blushy.classList.remove("animateblush");
        void blushy.offsetWidth;
        blushy.classList.add("animateblush");
        blushClicks = 0;


        sound.volume = 0.2;
        sound.currentTime = 0;
        sound.play();
    }
}