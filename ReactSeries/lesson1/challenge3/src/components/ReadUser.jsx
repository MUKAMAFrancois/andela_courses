import React, {useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
function ReadUser() {
  const [data, setData] = useState([]);
  const {userId} = useParams();

  useEffect(() =>{ 
    axios.get(`http://localhost:4000/users/${userId}`).then(res=> setData(res.data)).catch(err=> console.log(err));
  });

  return (
    
    <div>
      <h1>User Details</h1>
      <div className='w-75 rounded shadow p-4'>
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
          <tr>
            <th scope="row">{data.id}</th>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>
              <Link to="/" className="btn btn-primary">Back</Link>
            </td>
            
          </tr>
       
           
         
        </tbody>
    </table>

  </div>
  </div>
    
  )
}

export default ReadUser