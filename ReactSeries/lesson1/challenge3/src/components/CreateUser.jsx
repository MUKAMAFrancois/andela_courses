import React, {useState} from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom'
import axios from 'axios';


function CreateUser() {
  let navigate = useNavigate();
  const {userId} = useParams();

    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: ""
    });


const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    axios.post(`http://localhost:4000/users/${userId}`, values)
    .then(res=> {
      if(res.data){
        alert('User Created Successfully');
        navigate('/');
        
    }
  })
    .catch(err=> console.log(err));
}
  return (
    <form 
     className='d-flex 
     flex-column justify-content-center 
     align-items-center bg-light vh-100 
     rounded shadow p-4'
     onSubmit={handleSubmit}
     
     >
  <div class="form-row ">
  <h1>Create User</h1>
    <div class="form-group col-md-12">
      <label for="inputEmail4">Name</label>
      <input 
      type="text" 
      class="form-control" 
      id="inputEmail4" 
      placeholder="Name" 
      onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
    </div>
    <div class="form-group col-md-12">
      <label for="inputEmail4">Email</label>
      <input 
      type="email" 
      class="form-control" 
      id="inputEmail4" 
      placeholder="Email"
      onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
    </div>
    <div class="form-group col-md-12">
      <label for="inputPassword4">Phone</label>
      <input 
      type="number" 
      class="form-control" 
      id="inputPassword4" 
      placeholder="Password"
      onChange={(e) => setValues({ ...values, phone: e.target.value })}
      />
    </div>
  </div>

  <div className='d-flex'>
  <button 
    type="submit" 
    class="btn btn-primary m-4">Create</button>
    <Link to="/" className="btn btn-danger m-4">Cancel</Link>
  </div>
</form>
  )
}

export default CreateUser