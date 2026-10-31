function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sayings = [
    "You will find out something surprising about someone or something from the past.",
    "Something refreshing is coming your way.",
    "Some things come when you don't expect them.",
    "Something good may occur to you.",
    "Be open to what is new, it could surprise you."
];

let timer;

function fortune() {
    const nameInput = document.getElementById('namehere');
    const result = document.getElementById('result');
    const ball = document.getElementById('ball');
    const answer = document.getElementById('answer');
    const button = document.getElementById('askBtn');

    if (!nameInput) {
        console.error("Can't find an input with id='namehere'. Check your HTML.");
        return;
    }

    let name = nameInput.value.trim();
    const randomIndex = randomNumber(0, sayings.length - 1);
    console.log(sayings[randomIndex]);

    clearTimeout(timer);
    ball.classList.remove('revealed', 'shake');
    void ball.offsetWidth;
    ball.classList.add('shake');
    result.textContent = "Thinking...";
    button.disabled = true;

    timer = setTimeout(function () {
        ball.classList.remove('shake');
        answer.textContent = sayings[randomIndex];
        ball.classList.add('revealed');
        result.textContent = name + ", your fortune is: " + sayings[randomIndex];
        button.disabled = false;
    }, 2000);
}

document.getElementById('namehere').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        fortune();
    }
});


const root = document.documentElement;
const defaults = { ball: '#1a1a1a', face: '#ffffff', facetext: '#000000', tri: '#2f46c9', text: '8', sticker: '' };

function bind(inputId, cssVar) {
    document.getElementById(inputId).addEventListener('input', function (e) {
        root.style.setProperty(cssVar, e.target.value);
    });
}
bind('ballColor', '--ball');
bind('faceColor', '--face');
bind('faceTextColor', '--facetext');
bind('triColor', '--tri');

document.getElementById('faceInput').addEventListener('input', function (e) {
    document.getElementById('faceText').textContent = e.target.value || '8';
});

document.getElementById('stickerSelect').addEventListener('change', function (e) {
    document.getElementById('sticker').textContent = e.target.value;
});

document.getElementById('resetDesign').addEventListener('click', function () {
    root.style.setProperty('--ball', defaults.ball);
    root.style.setProperty('--face', defaults.face);
    root.style.setProperty('--facetext', defaults.facetext);
    root.style.setProperty('--tri', defaults.tri);
    document.getElementById('ballColor').value = defaults.ball;
    document.getElementById('faceColor').value = defaults.face;
    document.getElementById('faceTextColor').value = defaults.facetext;
    document.getElementById('triColor').value = defaults.tri;
    document.getElementById('faceInput').value = defaults.text;
    document.getElementById('faceText').textContent = defaults.text;
    document.getElementById('stickerSelect').value = defaults.sticker;
    document.getElementById('sticker').textContent = defaults.sticker;
});