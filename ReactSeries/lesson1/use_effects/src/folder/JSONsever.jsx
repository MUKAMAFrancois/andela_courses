/* 
What is JSON Server?
JSON Server is a Node.js package that allows you to create 
a REST API by simply defining a JSON file as your data source.
 It provides CRUD (Create, Read, Update, Delete) 
operations for interacting with the data.


// npm install -g json-server
//Create a JSON file: Create a JSON file containing your mock data. For example, db.json:
{
  "posts": [
    { "id": 1, "title": "Post 1", "body": "Body of post 1" },
    { "id": 2, "title": "Post 2", "body": "Body of post 2" }
  ]
}

// Start JSON Server: Run JSON Server with your JSON file as the data source:

//json-server --watch src\folder\db.json --port 5000


// You can use Axios to make GET, POST, PUT, 
and DELETE requests to your JSON Server endpoints.

*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';


export function GetPosts(){
    const [posts, setPosts] = useState([]);
    const [editingId, setEditingId] = useState(null);
    /* 
    editingId: Keeps track of the ID of the post currently being edited.
     It is initially set to null.
    editTitle and editBody: Store the current title and body of the post being edited.
     When the edit button is clicked for a particular post, we update the 
     state variables editingId, editTitle, 
     and editBody with the corresponding values of the post being edited.
    */
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/posts');
                setPosts(response.data);
            } catch (error) {
                console.log("Error", error);
            }
        };

        fetchPosts();
    }, []);


    
    
        const handleDelete = async(id) =>{
            try{
                await axios.delete(`http://localhost:5000/posts/${id}`);
                setPosts(posts.filter(post=>post.id !== id));
            } catch(error){
                console.log("Error", error);
            }
        }

    return (
        <div>
            <h3>Posts JSONsever</h3>
            <ul>
                {posts.map(post=>(
                    <li key={post.id}>
                        {post.title}
                        <button className='edit_btn'>Edit</button>
                        <button className='delete_btn' onClick={() => handleDelete(post.id)}>Delete</button>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}



export function AddPostComponet (){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleAddPost = async () => {
        try {
            const response = await axios.post('http://localhost:5000/posts', {
                title,
                body
            });

            setTitle('');
            setBody('');
            console.log("Response", response);
        } catch (error) {
            console.log("Error", error);
        }
    }

    return (
        <div className='add_post'>
            <h3>Add Post JSONsever</h3>
            <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Body" onChange={(e) => setBody(e.target.value)} />
            <button id='click_btn' onClick={handleAddPost}>Add Post</button>
        </div>
    )
}
