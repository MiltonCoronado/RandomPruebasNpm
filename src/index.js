const messages = [
    "oscar",
    "ana",
    "nicolai",
    "diego",
    "laura",
    "milton",
    "daniel",
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg }