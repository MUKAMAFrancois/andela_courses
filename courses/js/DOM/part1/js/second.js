const typeInput =document.querySelector('#type-input'),
         submitBtn =document.querySelector('button[type="submit"]'),
         searchInput=document.querySelector('#search-input'),
         itemsList =document.querySelector('.items-added-container'),
         firstItem=document.querySelector('.list-group-item:first-child'),
         editBtn=document.querySelectorAll('.edit-btn'),
         deleteBtn =document.querySelectorAll('.delete-btn'),
         container =document.querySelector('.container'),
         previousBtn=document.querySelector('.previous-btn'),
         nextBtn=document.querySelector('.next-btn')




function addItem() {
    if (typeInput.value !== "") {
        const newItemHTML = `
            <div class="list-group-item">
                <p>${typeInput.value}</p>
                <div class="delete-btn">X</div>
                <div class="edit-btn">Edit</div>
            </div>
        `;

        itemsList.insertAdjacentHTML('beforeend', newItemHTML);
        typeInput.value = "";

        // Attach event listeners to newly added edit and delete buttons
        attachEditDeleteListeners();
    } else {
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







// Pagination: Previous and Next buttons


// Algorithm.
/* 
Here's an algorithm for implementing the functionality of Previous and Next buttons:

Initialize a variable to keep track of the current page number.
Define a constant for the number of items per page.
Calculate the total number of pages based on the total number of items and items per page.
Initially hide the Previous button since it should not be shown on the first page.
Add event listeners to the Next and Previous buttons.
When the Next button is clicked, show the next page of items and update the current page number.
When the Previous button is clicked, show the previous page of items and update the current page number.
Ensure that the buttons behave appropriately based on the current page number
 (e.g., hiding the Previous button on the first page and hiding the Next button on the last page).

*/

let currentPage = 1;
const itemsPerPage = 3;
const items = document.querySelectorAll('.list-group-item');
const totalPages = Math.ceil(items.length / itemsPerPage);

// Initially hide the Previous button
previousBtn.style.display = 'none';

// Function to show items for the current page
function showPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    items.forEach((item, index) => {
        if (index >= startIndex && index < endIndex) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Show the initial page
showPage(currentPage);

// Event listener for Next button
nextBtn.addEventListener('click', () => {
    currentPage++;
    if (currentPage > 1) {
        previousBtn.style.display = 'block';
    }
    if (currentPage >= totalPages) {
        nextBtn.style.display = 'none';
    }
    showPage(currentPage);
});

// Event listener for Previous button
previousBtn.addEventListener('click', () => {
    currentPage--;
    if (currentPage === 1) {
        previousBtn.style.display = 'none';
    }
    if (currentPage < totalPages) {
        nextBtn.style.display = 'block';
    }
    showPage(currentPage);
});



// editing functionality.


/* 
Here's an algorithm to implement the editing functionality:

Add Event Listeners: Add event listeners to all edit buttons to open the dialog box when clicked.
Create Dialog Box: Create a dialog box for editing items. This dialog should display the existing content and allow the user to modify it.
Save Changes: Add functionality to save changes made in the dialog box and update the item accordingly.
Cancel Editing: Implement functionality to cancel editing and close the dialog box without saving changes.
 


// Edit button event listener
editBtn.forEach(btn => {
    btn.addEventListener('click', function() {
      // Get the item's content
      const itemContent = this.parentNode.querySelector('p').textContent;
      // Set the dialog input value to the item's content
      document.getElementById('changed-content-item').value = itemContent;
  
      // Get the associated edit-item-dialog element
      const dialog = this.parentNode.querySelector('.edit-item-dialog');
  
      // Show the dialog box
      dialog.showModal();
    // dialog.style.display='block';
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

function attachEditDeleteListeners() {
    const newEditBtns = document.querySelectorAll('.edit-btn');
    const newDeleteBtns = document.querySelectorAll('.delete-btn');
    const newCancelBtns = document.querySelectorAll('.cancel-btn');

    newEditBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const itemContent = this.parentNode.querySelector('p').textContent;
            document.getElementById('changed-content-item').value = itemContent;
            const dialog = this.parentNode.querySelector('.edit-item-dialog');
            dialog.showModal();
        });
    });

    newDeleteBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            removeItem(this.parentNode);
        });
    });

    newCancelBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const dialog = this.closest('.edit-item-dialog');
            dialog.close();
        });
    });
}

attachEditDeleteListeners();


*/









