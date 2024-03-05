//Create body structure - a container div holding 16 divs (grid items)
const body = document.querySelector('body');
const container = document.createElement('div');
body.appendChild(container).className = 'container';
body.style.backgroundColor = 'gray';

/*
function createGridItems(rows, columns) {
    container.style.setProperty('-grid-rows', rows);
    container.style.setProperty('-grid-columns', columns);
    for ( c = 0; c <= (rows * columns); c++ ){
        let item = document.createElement('div');
        container.appendChild(item).className = 'grid-item';
        item.addEventListener ('mouseover', function bgChange(){
            item.style.backgroundColor = 'black';
        });
    };
};
makeRows(16,16);
*/
    function createGridItems(rows, columns){
        container.style.setProperty ('grid-rows', rows);
        container.style.setProperty ('crid-columns', columns)
        for (i = 0; i <= (rows * columns); i++) {
            let item = document.createElement('div');
            container.appendChild(item).className = 'grid-item';
        };
    };
    createGridItems(16,16);
        
// const div1 = document.createElement('div');
// div1.className = 'grid-item';
// container.appendChild(div1);
//div1.style.backgroundColor = 'blue';



/*
const div2 = document.createElement('div');
div2.className = 'grid-item';
container.appendChild(div2);
div2.style.backgroundColor = 'yellow';

const div3 = document.createElement('div');
div3.className = 'grid-item';
container.appendChild(div3);
div3.style.backgroundColor = 'green';
 
const div4 = document.createElement('div');
div4.className = 'grid-item';
container.appendChild(div4);
div4.style.backgroundColor = 'orange';

const div5 = document.createElement('div');
div5.className = 'grid-item';
container.appendChild(div5);
div5.style.backgroundColor = 'black';


const div6 = document.createElement('div');
div6.className = 'grid-item';
container.appendChild(div6);
div6.style.backgroundColor = 'white';

const div7 = document.createElement('div');
div7.className = 'grid-item';
container.appendChild(div7);
div7.style.backgroundColor = 'red';

const div8 = document.createElement('div');
div8.className = 'grid-item';
container.appendChild(div8);
div8.style.backgroundColor = 'purple';

const div9 = document.createElement('div');
div9.className = 'grid-item';
container.appendChild(div9);
div9.style.backgroundColor = 'beige';

const div10 = document.createElement('div');
div10.className = 'grid-item';
container.appendChild(div10);
div10.style.backgroundColor = 'pink';

const div11 = document.createElement('div');
div11.className = 'grid-item';
container.appendChild(div11);
div11.style.backgroundColor = 'turquoise';

const div12 = document.createElement('div');
div12.className = 'grid-item';
container.appendChild(div12);
div12.style.backgroundColor = 'brown';

const div13 = document.createElement('div');
div13.className = 'grid-item';
container.appendChild(div13);
div13.style.backgroundColor = 'silver';

const div14 = document.createElement('div');
div14.className = 'grid-item';
container.appendChild(div14);
div14.style.backgroundColor = 'olive';

const div15 = document.createElement('div');
div15.className = 'grid-item';
container.appendChild(div15);
div15.style.backgroundColor = 'moccasin';

const div16 = document.createElement('div');
div16.className = 'grid-item';
container.appendChild(div16);
div16.style.backgroundColor = 'navy'; 

*/