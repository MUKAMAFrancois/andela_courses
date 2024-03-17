import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
function Home() {
  //json-server --watch src/data/db.json --port 4000
  const [data, setData] = useState([]);
  useEffect(() =>{ 
    axios.get('http://localhost:4000/users').then(res=> setData(res.data)).catch(err=> console.log(err));
  });

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List of Users</h1>
      <div className='w-75 rounded shadow p-4'>
      <Link to="/create" className="btn btn-primary mb-3">Add User +</Link>
      <table class="table table-dark">
        <thead> 
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index)=>(
            <tr key={index}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Link to={`read/${user.id}`} className="btn btn-success mx-2">Read</Link>
                <Link to={`/update/${user.id}`}  className="btn btn-primary mx-2">Edit</Link>
                <Link to={`delete/${user.id}`}  className="btn btn-danger mx-2">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
  </table>
      </div>
    
    </div>
  )
}

export default Home