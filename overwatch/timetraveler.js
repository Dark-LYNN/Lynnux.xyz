const startTimestamp = 1718900012 * 1000;

function updateCountUp() {
    const now = new Date().getTime();
    const distance = now - startTimestamp;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}

function updateTextShadow(textColor) {
    const rgb = textColor.match(/\d+/g);
    const brightness = Math.sqrt(
        0.299 * rgb[0] * rgb[0] +
        0.587 * rgb[1] * rgb[1] +
        0.114 * rgb[2] * rgb[2]
    );

    const countdown = document.getElementById("countdown");
    if (brightness > 127.5) {
        countdown.style.textShadow = '1px 1px 2px black';
    } else {
        countdown.style.textShadow = '1px 1px 2px white';
    }
}

document.getElementById('backgroundColorPicker').addEventListener('input', function() {
    document.body.style.backgroundColor = this.value;
});

document.getElementById('textColorPicker').addEventListener('input', function() {
    const countdown = document.getElementById("countdown");
    countdown.style.color = this.value;
    updateTextShadow(this.value);
});

document.getElementById('headerFontPicker').addEventListener('change', function() {
    document.getElementById("headerText").style.fontFamily = this.value;
});

document.getElementById('countdownFontPicker').addEventListener('change', function() {
    document.getElementById("countdown").style.fontFamily = this.value;
});

const countUpInterval = setInterval(updateCountUp, 1000);

updateCountUp();

updateTextShadow(document.getElementById('textColorPicker').value);
