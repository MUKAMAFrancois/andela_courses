import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function DeleteUser() {
    let navigate = useNavigate();

    const [data, setData] = useState({});
    const { userId } = useParams();
  
    useEffect(() => {
      axios.get(`http://localhost:4000/users/${userId}`)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [userId]);


    const handleDelete = () => {
        axios.delete(`http://localhost:4000/users/${userId}`)
          .then(res => {
            if (res.data) {
              alert('User Deleted Successfully');
              navigate('/');
            }
          })
          .catch(err => console.log(err));
      };

  return (
   
    
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100 rounded shadow p-4">
    <h1>Are you sure you want to delete this user?</h1>
        <div className='d-flex'>
            <button

                type='button'
                className='btn btn-danger mx-2'
                onClick={handleDelete}>Delete</button>

            <Link to="/" className="btn btn-primary mx-2">Cancel</Link>
        </div>
    </div>

   
  )
}

export default DeleteUser