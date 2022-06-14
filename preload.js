const MESSAGE = [
    "🐧<a target='_blank' href='https://www.youtube.com/watch?v=zWH_9VRWn8Y'><u>this</u></a> is a sad video :(",
    "🌧️ rainy weather is the best. don't you agree?",
    "💭 let's chat!", 
    "🌅 have a great day :)",
    "🦙 alpacas are cute",
];

const FUN_FACT = [
    "taking photos 📷",
    "taking little walks around 🚶🏻‍♂️",
    "watching YouTube",
    "painting 🎨",
    "binge-watching 📺",
    "playing indie games 🎮",
    "eating pasta 🍝",
    "eating anything with cheese 🧀",
]

function getRandomMessage(arr) {
    let message = arr[Math.floor(Math.random() * arr.length)];
    return message;
}

window.onload = () => {
    document.getElementById('hear-me-out').innerHTML = getRandomMessage(MESSAGE);
    document.getElementById('fun-fact').innerHTML = 'also enjoys ' + getRandomMessage(FUN_FACT);
}