let my_data =[
    {id:1,name:"John",email:"john@email.com"},
    {id:2,name:"Emmanuel",email:"emmy@email.com"},

]


function readData(){
    localStorage.setItem("my_data",JSON.stringify(my_data));
    let deserialized_data=JSON.parse(localStorage.getItem('my_data'));
    let tableData=document.querySelector('.data_table');

    let elements="";
    deserialized_data.map(record=>{
        elements+=`<tr>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>
        <button class="edit-btn" onclick={editData(${record.id})}>Edit</button>
        <button class="delete-btn" onclick={deleteRecord(${record.id})}>Delete</button>
    </td>
        </tr>`
    });
    tableData.innerHTML=elements;
}


function addData(){
    let createForm = document.querySelector('.create_form');
    // make create-form appear
    createForm.style.display="block";
    // then hide add btn
    document.querySelector('.add-btn').style.display="none";
}
document.querySelector('.add-btn').addEventListener('click',addData);

function createData(){
    const inputName=document.querySelector('.name').value;
    const inputEmail=document.querySelector('.email').value;
    
    let inputData={id:3,name:inputName,email:inputEmail};
    my_data.push(inputData);
    readData();
  

}
document.getElementById('create-btn').addEventListener('click',createData);


function editData(id){
    // alert(id);
    document.querySelector('.update_form').style.display="block";
    document.querySelector('.add-btn').style.display="none";
    let existingData=my_data.find(record=>record.id===id);
    document.querySelector('.update_name').value=existingData.name;
    document.querySelector('.update_email').value=existingData.email;
    document.getElementById('id').value=existingData.id;
}

function updateData(){
    var id = parseInt(document.getElementById('id').value);
    let up_name = document.querySelector('.update_name').value;
    let up_email = document.querySelector('.update_email').value;
    let index = my_data.findIndex(record => record.id === id);
    document.querySelector('.update_form').style.display = "none";
    my_data[index].name = up_name; 
    my_data[index].email = up_email; 
    readData();
}


document.getElementById('update-btn').addEventListener('click',updateData);



function deleteData(id) {
    let index = my_data.findIndex(record => record.id === id);
    if (index !== -1) {
        my_data.splice(index, 1);
        readData();
    }
}

function deleteRecord(id) {
    if (confirm("Are you sure you want to delete this record?")) {
        deleteData(id);
    }
}
