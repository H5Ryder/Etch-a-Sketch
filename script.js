//CONST VARIABLES----------------------------
let COLORBUTTONSNUM = 5;



//FIND CONTAINER -> FIND PAGE HEIGHT -> SET CONTAINER HXW TO PAGE HEIGHT----------------------------
const container = document.querySelector('#container');

var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

height = height - 60; //adds some white margin to the container
container.style.height = height.toString() + "px";
container.style.width = height.toString() + "px";


//SET GRID SIZE -> SET UP ROW DIVS AND COLUMN DIVS----------------------------
let size = 10;

//Each Element in rowDivs is a row div, that contains one row of the colDivs
const rowDivs = new Array(size);

var colDivs = new Array(size);

//colDivs is 10x10 array, this for loop is putting an array of 10 in each element to create a matrix of 100
for (var i = 0; i < size; i++) {
    colDivs[i] = new Array(size);
}


initialiseGrid(); //CREATES A GRID BY ITERATING THROUGH EMPTY DIV ARRAYS AND ADDING THEM TO CSS Classes
let colorButtons = makeColorButtons(COLORBUTTONSNUM); //QUERIES 5 BUTTONS IN THE HTML FILE -> ASSIGNS THEM A RANDOM COLOR USING grc() FUNCTION





for (let k = 0; k < colorButtons.length; k++) {


    colorButtons[k].addEventListener('click', () => {

        console.log("sexy");

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {

                colDivs[i][j].addEventListener('mouseenter', () => {
                    //colDivs[i][j].classList.remove('boxH');
                    //colDivs[i][j].classList.add('boxHBlue');
                    capture: false

                    colDivs[i][j].style.backgroundColor = colorButtons[k].style.backgroundColor;


                });




            }


        }





    });

}




//Add event listener for grid buttons
const b10 = document.querySelector('#b10');

const b20 = document.querySelector('#b20');

const b40 = document.querySelector('#b40');

const b80 = document.querySelector('#b80');

const b160 = document.querySelector('#b160');

sizeButtons = [b10, b20, b40, b80, b160];
console.log(sizeButtons);

for (let k = 0; k < sizeButtons.length; k++) {

    sizeButtons[k].addEventListener('click', () => {

        refresh();
        if (k == 0) {
            size = 10;
        } else {
            size = k * 20;
        }


        const rowDivs = new Array(size);

        var colDivs = new Array(size);

        for (var i = 0; i < size; i++) {
            colDivs[i] = new Array(size);
        }

        for (let i = 0; i < size; i++) {
            rowDivs[i] = document.createElement('div');
            rowDivs[i].classList.add('boxV');
            container.appendChild(rowDivs[i]);

            for (let j = 0; j < size; j++) {
                colDivs[i][j] = document.createElement('div');
                colDivs[i][j].classList.add('boxH');
                rowDivs[i].appendChild(colDivs[i][j]);


                colDivs[i][j].addEventListener('mouseenter', () => {
                    colDivs[i][j].classList.remove('boxH');
                    colDivs[i][j].classList.add('boxHBlue');
                    capture: false
                });


            }
        }



    });

}


//function refresh grid

function refresh() {

    //remove all child divs


    // Select all div elements within the parent container
    const divsToRemove = container.querySelectorAll('div');
    // Remove each div element
    divsToRemove.forEach(div => div.remove());



}



//CREATES DIVS IN ROWDIVS & COLDIVS -> APPENDS THEM TO HTML -> ADDS THEM TO CLASSES
function initialiseGrid() {
for (let i = 0; i < size; i++) {
    rowDivs[i] = document.createElement('div');
    rowDivs[i].classList.add('boxV');
    container.appendChild(rowDivs[i]);

    for (let j = 0; j < size; j++) {
        colDivs[i][j] = document.createElement('div');
        colDivs[i][j].classList.add('boxH');
        rowDivs[i].appendChild(colDivs[i][j]);


        colDivs[i][j].addEventListener('mouseenter', () => {
            colDivs[i][j].classList.remove('boxH');
            colDivs[i][j].classList.add('boxHBlue');
            capture: false
        });
    }
}
}
//RETURNS RANDOM RGB VALUE
function grc() {
    //get random color
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}
//QUERIES NUMBER OF BUTTONS WITH IDs starting 'C' AND ASSIGNS THEM A RANDOM COLOR -> BUTTONS ADDED TO ARRAY AND THEN RETURNED
function makeColorButtons(size) {
    let colorButtons = new Array(size);

    for (let i = 0; i < colorButtons.length; i++) {
        const index = i + 1;
        console.log(`#c${index}`);
        colorButtons[i] = document.querySelector(`#c${index}`);
        colorButtons[i].style.backgroundColor = grc();
    }

    return colorButtons;
}
