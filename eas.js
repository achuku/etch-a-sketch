//Create body structure - a container div holding 16 divs (grid items)
const body = document.querySelector('body');
const container = document.createElement('div');
body.appendChild(container).className = 'container';
body.style.backgroundColor = 'gray';

const btn = document.createElement('button');
container.appendChild(btn).className = 'button';
btn.textContent = 'Change Number Of Squares';

btn.addEventListener ( 'click', () => {
    prompt('How many squares per side?', '');
});


function createGridItems(rows, columns){
    //container.style.setProperty ('grid-rows', rows);
    //container.style.setProperty ('grid-columns', columns);
    for (i = 0; i < (rows * columns); i++) {
        let item = document.createElement('div');
        container.appendChild(item).className = 'grid-item';
        item.addEventListener ('mouseover',function bgChange(){
            
            item.style.backgroundColor = 'white'; 
        });
    };
};
createGridItems(16,16);
 
