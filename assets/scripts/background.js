const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const hiragana = 'あぁかさたないぃきしちにうくすつぬえけせてねおぉこそとのぇっんゔーゝゞ、。゙゚ゟはまやゃらりみひふむゆゅるめへれろょよもほわがざだばぱぴびぢじぎゐぐずづぶぷぺべでぜげゑをごぞどぼぽ'
const alphabet = katakana + latin + nums + hiragana;

const fontSize = 20;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

const draw = () => {
    ctx.fillStyle ="#1c2526";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#60A5FA';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    
    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.95) {
        rainDrops[i] = 0;
    }

    // Incrémentation plus petite → plus lent
    rainDrops[i] += 0.75;
}

};

setInterval(draw, 50);


window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const newColumns = canvas.width / fontSize;
    rainDrops.length = 0;
    for (let x = 0; x < newColumns; x++) {
        rainDrops[x] = 1;
    }
});
  