const rInput = document.getElementById('r');
const gInput = document.getElementById('g');
const bInput = document.getElementById('b');
const convertBtn = document.getElementById('convert');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', () => {
    const r = parseInt(rInput.value, 10);
    const g = parseInt(gInput.value, 10);
    const b = parseInt(bInput.value, 10);
    if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
        const hex = rgbToHex(r, g, b);
        resultDiv.textContent = `Hex: #${hex}`;
    } else {
        resultDiv.textContent = 'Invalid RGB values';
    }
});

function rgbToHex(r, g, b) {
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');
    return `${hexR}${hexG}${hexB}`;
}