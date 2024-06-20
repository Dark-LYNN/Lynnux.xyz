// Set the target timestamp (1718906400 in UNIX time)
const targetTimestamp = 1718906400 * 1000; // Convert to milliseconds

// Function to update the countdown timer
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetTimestamp - now;

    // Calculate hours, minutes, and seconds
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
    
    // If the countdown is over, display some text
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}

// Function to update text shadow based on text color
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

// Event listener for background color change
document.getElementById('backgroundColorPicker').addEventListener('input', function() {
    document.body.style.backgroundColor = this.value;
});

// Event listener for text color change
document.getElementById('textColorPicker').addEventListener('input', function() {
    const countdown = document.getElementById("countdown_text");
    countdown.style.color = this.value;
    updateTextShadow(this.value);
});
document.getElementById('textColorPicker').addEventListener('input', function() {
    const countdown = document.getElementById("countdown");
    countdown.style.color = this.value;
    updateTextShadow(this.value);
});

document.getElementById('headerFontPicker').addEventListener('change', function() {
    document.getElementById("headerText").style.fontFamily = this.value;
});

//.  Event listener for countdown font change
document.getElementById('countdownFontPicker').addEventListener('change', function() {
    document.getElementById("countdown").style.fontFamily = this.value;
});

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately when the page loads
updateCountdown();

// Initial call to set text shadow based on default text color
updateTextShadow(document.getElementById('textColorPicker').value);
