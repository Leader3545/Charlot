const messages = [
    "แน่ใจหรอ?",
    "แน่ใจจริงๆ หรอ?",
    "คิดดียัง?",
    "คิดดีแล้วหรอ?",
    "คิดดีแล้วนะ?",
    "คิดดีแล้วใช่ไหม?",
    "คิดดีแล้วนะ?",
    "คิดดีแล้วใช่ไหม?",
    "คิดดีแล้วนะ?",
    "ได้เถอะ! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}