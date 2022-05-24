const vibes = [
    "... es emocionante.",
    "... es divertido.",
    "... te permite conocerte a ti mismo.",
    "... te hace conocer gente nueva.",
    "... es una aventura.",
];

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibe);
