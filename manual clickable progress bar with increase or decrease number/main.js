let progressBar = document.getElementById("progressBar");
let numberDisplay = document.getElementById("numberDisplay");
let isIncreasing = true;  // Flag to determine if the number is increasing or decreasing
let progressValue = 0;

function updateProgress() {
    // Update the progress bar value
    progressBar.value = progressValue;
    numberDisplay.textContent = progressValue;

    if (isIncreasing) {
        if (progressValue < 100) {
            progressValue++;
        } else {
            isIncreasing = false;
        }
    } else {
        if (progressValue > 0) {
            progressValue--;
        } else {
            isIncreasing = true;
        }
    }
}

function startProgress() {
    // Start increasing or decreasing the progress bar
    setInterval(updateProgress, 100);  // Update every 100ms
}

function reverseProgress() {
    // Reverse the direction of the progress bar
    isIncreasing = !isIncreasing;
}
