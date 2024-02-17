// console.log(document);
// console.log(document.URL);
// console.log(document.title);
// document.title = "New Title"; // change the title of the page using JS
// console.log(document.head); // head of the page


// get all forms:
// console.log(document.forms);


// get all links:
// console.log(document.links);


// get all images:
// console.log(document.images);





// 1. ******************Selectors:

 let titleHeader= document.querySelector('.add-items-title');
// titleHeader.innerText = "New Title";  // this will override the  existing title of the page
// console.log(titleHeader.innerText); // New Title
// titleHeader.innerHTML='<h2>I love you</h2>'; // but the existing tag is still there.

// remember camelcase.
// titleHeader.style.backgroundColor='#f00'




// getElementsByClassName



// const items= document.getElementsByClassName('list-group-item');
// console.log(items); // HTMLCollection
// items[0].style.fontWeight='bold';

// // having impact on all of items:


// for(let i=0; i<items.length;i++){
//     items[i].style.backgroundColor='yellow';
// }





// querrySelector


const submitBtn= document.querySelector('Button[type="Submit"]');
// submitBtn.style.backgroundColor='red';


const items = document.querySelector('.list-group-item');
const lastItem= document.querySelector('.list-group-item:last-child');
const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// lastItem.style.backgroundColor='violet';

// querrySelectorAll will also grab more than one thing. just as we saw it.





// 2.*****************TRAVESING THE DOM



const inpuText = document.querySelector('input[type="text"]');
const allItems= document.querySelector('.items-added-container');


// console.log(inpuText.parentElement);  /*   <div class="input-container"> */
// console.log(inpuText.parentNode);
// console.log(inpuText.parentElement.children);
// console.log(inpuText.parentElement.children[1]);
// console.log(allItems.firstElementChild)
// console.log(allItems.lastElementChild)

// allItems.lastElementChild.textContent="Last Item";

// console.log(allItems.children);
/* [div.list-group-item, div.list-group-item, 
    div.list-group-item, div.list-group-item,
     div.list-group-item] */



// create Vs insert.


const newDiv = document.createElement('div');
// newDiv.className='new-div-created'; // add class name
// newDiv.id='new-div-id'; // add id
// newDiv.setAttribute('name-of-attribute','content-of-attribute');
// newDiv.textContent='I love you';
// console.log(newDiv);


// grab where we wan put our new DIv.

const container = document.querySelector('body .container');
const h2 = document.querySelector('.container h2');
// container.appendChild(newDiv);
// container.insertBefore(newDiv,h2);





// 3. ****************************EVENTS


const btnClick = document.querySelector('.container .btn-click');
// btnClick.addEventListener('click', (event)=>{
//     // console.log(event);
//     console.log(event.target);  /* <button class="btn-click">Click Here</button> */
//     event.target.classList;
//     event.type.className;
//     event.type.indexOf;
//     console.log(event.type); // click
//     console.log(event.shiftKey); // true or false.

// })


// types of events
// btnClick.addEventListener('click',runEvent);
btnClick.addEventListener('dbclick',runEvent);

function runEvent(e){
    console.log(`Event Type: ${e.type}`);

}


