let colors = ['blue','yellow','black','red','brown','orange'];

let button = document.getElementById('tombol');

button.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random()*colors.length)]
    let container = document.getElementById('badan');
    container.style.background = randomColor;
})