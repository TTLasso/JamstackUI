const vibes = [
    "... eres genial",
    "... eres inteligente",
    "... eres amable",
    "... eres divertido",
    "... eres alto",
];

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibe);
