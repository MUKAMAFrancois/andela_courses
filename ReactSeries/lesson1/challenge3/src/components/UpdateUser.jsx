import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
  let navigate = useNavigate();

  const [data, setData] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/users/${userId}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [userId]); // Add dependency array to ensure useEffect runs only when userId changes

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/users/${userId}`, data)
      .then(res => {
        if (res.data) {
          alert('User Updated Successfully');
          navigate('/');
        }
      })
      .catch(err => console.log(err));
  }; // Add closing brace here

  return (
    <form
      className='d-flex flex-column justify-content-center align-items-center bg-light vh-100 rounded shadow p-4'
      onSubmit={handleUpdate}
    >
      <div className="form-row ">
        <h1>Update User</h1>
        <div className="form-group col-md-12">
          <label htmlFor="inputEmail4">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            value={data.name || ''}
            placeholder="Name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="inputEmail4">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            value={data.email || ''}
            placeholder="Email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="inputPassword4">Phone</label>
          <input
            type="number"
            className="form-control"
            id="inputPassword4"
            value={data.phone || ''}
            placeholder="Phone"
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </div>
      </div>

      <div className='d-flex'>
        <button
          type="submit"
          className="btn btn-primary m-4">Update</button>
        <Link to="/" className="btn btn-danger m-4">Cancel</Link>
      </div>
    </form>
  );
}

export default UpdateUser;
