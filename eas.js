const container = document.getElementById('grid-container');

function random(number) {
    return Math.floor(Math.random() * number + 1);
}

function createGridItems(rows, columns){
    container.style.setProperty ('--grid-rows', rows);
    container.style.setProperty ('--grid-cols', columns);
    for (i = 0; i < (rows * columns); i++) {
        let item = document.createElement('div');
        container.appendChild(item).className = 'grid-item';
        item.addEventListener ('mouseover',function bgChange(){
            
            const rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
            item.style.backgroundColor = rndCol;
        });
    };
};
createGridItems(16,16);

const btn = document.getElementById('button');
btn.addEventListener ( 'click', () => {
    size = prompt('How many squares per side? (1 - 100).', '');
    container.innerHTML = "";
    if (0 < size && size <=100){
        createGridItems(size, size);
    }else {
        createGridItems(16,16);
        alert('Please enter a value between 1 and 100.');
    }
    
});



 
