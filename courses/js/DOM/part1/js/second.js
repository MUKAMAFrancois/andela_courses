const typeInput =document.querySelector('#type-input');
const submitBtn =document.querySelector('button[type="submit"]');
const searchInput=document.querySelector('#search-input');
const itemsList =document.querySelector('.items-added-container');
const firstItem=document.querySelector('.list-group-item:first-child');
const editBtn=document.querySelectorAll('.edit-btn');
const deleteBtn =document.querySelectorAll('.delete-btn');
const container =document.querySelector('.container');
const previousBtn=document.querySelector('.previous-btn');
const nextBtn=document.querySelector('.next-btn');


// function addItem(){
//   if(typeInput.value !==""){
//     const newItemList=document.createElement('div');
//     newItemList.classList.add('list-group-item');

//     const paragraph=document.createElement('p');
//     paragraph.textContent=typeInput.value;

//     const AdDeleteBtn =document.createElement('div');
//     AdDeleteBtn.classList.add('delete-btn');
//     AdDeleteBtn.textContent="X";

//     newItemList.appendChild(paragraph);
//     newItemList.appendChild(AdDeleteBtn);


//     itemsList.append(newItemList);
//     typeInput.value="";
//   }
//   else{
//     alert("Empty input");
//   }
// }

function addItem(){
    if(typeInput.value !==""){
      const newItemHTML = `
        <div class="list-group-item">
          <p>${typeInput.value}</p>
          <div class="delete-btn">X</div>
          <div class="edit-btn">Edit</div>
        </div>
      `;
  
      itemsList.insertAdjacentHTML('beforeend', newItemHTML);
      typeInput.value="";
    }
    else{
      alert("Empty input");
    }
  }
  
submitBtn.addEventListener('click',addItem);

function removeItem(clickedItem){

    itemsList.removeChild(clickedItem);
}
deleteBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        removeItem(this.parentNode); // 'this' refers to the clicked delete button

        //this.parentNode refers to the parent node of the element that triggered the event listener.
    });
});


function searchItem(){
    // this function intends to search, where Items will be filtered depending on 
    //Input being typed into search-Input.
    
    const text_being_typed =searchInput.value.toLowerCase();
    // we need to grab all items.
    const allItemsList=document.querySelectorAll('.list-group-item');
    // loop through all items
    allItemsList.forEach(item=>{
        const itemText=item.textContent.toLocaleLowerCase();

        if(itemText.includes(text_being_typed)){
            item.style.display='block';
        } else{
            item.style.display='none';
        }
    });
    
}
searchInput.addEventListener('input',searchItem);




// editing functionality.


/* 
Here's an algorithm to implement the editing functionality:

Add Event Listeners: Add event listeners to all edit buttons to open the dialog box when clicked.
Create Dialog Box: Create a dialog box for editing items. This dialog should display the existing content and allow the user to modify it.
Save Changes: Add functionality to save changes made in the dialog box and update the item accordingly.
Cancel Editing: Implement functionality to cancel editing and close the dialog box without saving changes.
 */



// Edit button event listener
editBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        // Get the item's content
        const itemContent = this.parentNode.querySelector('p').textContent;
        // Set the dialog input value to the item's content
        document.getElementById('changed-content-item').value = itemContent;
        // Open the dialog box
          // Show the dialog box associated with the clicked "Edit" button
          const dialog = this.parentNode.querySelector('.edit-item-dialog');
          dialog.showModal();
    });
});




// Save button event listener
document.querySelector('.save-btn').addEventListener('click', function() {
    // Get the new content from the dialog input
    const newContent = document.getElementById('changed-content-item').value;
    // Update the item's content
    const currentItem = document.querySelector('.edit-item-dialog').parentNode;
    currentItem.querySelector('p').textContent = newContent;
    // Close the dialog box
    document.querySelector('.edit-item-dialog').close();
});

// Cancel button event listener
document.querySelector('.cancel-btn').addEventListener('click', function() {
    // Close the dialog box without saving changes
    document.querySelector('.edit-item-dialog').close();
});




