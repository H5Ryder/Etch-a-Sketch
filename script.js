//Find container, find page height, resize container to it
const container = document.querySelector('#container');

var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

height =  height -60;
container.style.height = height.toString() + "px";
container.style.width = height.toString() + "px";


//Decide grid size, set up row Divs and column Divs
let size = 10;

const rowDivs = new Array(size);

var colDivs = new Array(size);

for (var i = 0; i < size; i++) {
  colDivs[i] = new Array(size);
}

console.log(colDivs);

//Iterate through arrays and assign them Divs, append Divs


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

//Add color to certain buttons
function grc() {
  //get random color
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}



const c1 = document.querySelector('#c1');
c1.style.backgroundColor = grc();

const c2 = document.querySelector('#c2');
c2.style.backgroundColor = grc();

const c3 = document.querySelector('#c3');
c3.style.backgroundColor = grc();

const c4 = document.querySelector('#c4');
c4.style.backgroundColor = grc();

const c5 = document.querySelector('#c5');
c5.style.backgroundColor = grc();

colorButtons = [c1,c2,c3,c4,c5];



for (let k = 0; k < colorButtons.length; k++) {


    colorButtons[k].addEventListener('click',()=> {

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

sizeButtons = [b10,b20,b40,b80,b160];
console.log(sizeButtons);

for (let k = 0; k < sizeButtons.length; k++) {

    sizeButtons[k].addEventListener('click',()=> {

        refresh();
        if (k==0) {
            size = 10;
        } else {
            size = k*20;
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

function refresh(){

  //remove all child divs


// Select all div elements within the parent container
const divsToRemove = container.querySelectorAll('div');
// Remove each div element
divsToRemove.forEach(div => div.remove());



}