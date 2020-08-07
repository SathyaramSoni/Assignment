const COLORS = [
    { id: 1, color: '#6F98A8' },
    { id: 2, color: '#2B8EAD' },
    { id: 3, color: '#2F454E' },
    { id: 4, color: '#2B8EAD' },
    { id: 5, color: '#2F454E' },
    { id: 6, color: '#BFBFBF' },
    { id: 7, color: '#BFBFBF' },
    { id: 8, color: '#6F98A8' },
    { id: 9, color: '#2F454E' }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function shuffle() {
    const colors = [...COLORS];
    shuffleArray(colors);
    renderCells(colors);
}

function sort() {
    const sortedColors = COLORS.sort(function(a, b){return a.id - b.id});
    renderCells(sortedColors);
}

function renderCells(colors) {
    let markUp = '';
    colors.forEach(item => markUp += `<div class="grid-item" style="background-color: ${item.color}">${item.id}</div>`);
    document.getElementById("gridContainer").innerHTML = markUp;
}

sort();