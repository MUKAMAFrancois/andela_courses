import Header from "./staticComponents/Header";
import Nav from "./staticComponents/Nav";
import Footer from "./staticComponents/Footer";

import HomePage from './dynamicComponents/HomePage';
import AboutPage from './dynamicComponents/AboutPage';
import PostPage from './dynamicComponents/PostPage';
import Missing from './dynamicComponents/Missing';
import NewPost from './dynamicComponents/NewPost';
import {Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const _posts_arr=[
    {
      id:1,
      title:"My first Blog Post",
      body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi vitae fugiat molestiae sunt delectus explicabo sapiente quis! Reiciendis necessitatibus, labore sit, facere aliquam dolor cupiditate eos perferendis harum veritatis accusantium adipisci ipsa molestiae! Vel cum nulla ea deserunt animi optio in nostrum, veniam recusandae veritatis soluta ratione, sint iusto. Sunt.",
      datetime:"July 20, 2024"
    },
    {
      id:2,
      title:"My second Blog Post",
      body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi vitae fugiat molestiae sunt delectus explicabo sapiente quis! Reiciendis necessitatibus, labore sit, facere aliquam dolor cupiditate eos perferendis harum veritatis accusantium adipisci ipsa molestiae! Vel cum nulla ea deserunt animi optio in nostrum, veniam recusandae veritatis soluta ratione, sint iusto. Sunt.",
      datetime:"July 23, 2024"
    },
    {
      id:3,
      title:"My second Blog Post",
      body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi vitae fugiat molestiae sunt delectus explicabo sapiente quis! Reiciendis necessitatibus, labore sit, facere aliquam dolor cupiditate eos perferendis harum veritatis accusantium adipisci ipsa molestiae! Vel cum nulla ea deserunt animi optio in nostrum, veniam recusandae veritatis soluta ratione, sint iusto. Sunt.",
      datetime:"July 26, 2024"
    },
    {
      id:4,
      title:"My second Blog Post",
      body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi vitae fugiat molestiae sunt delectus explicabo sapiente quis! Reiciendis necessitatibus, labore sit, facere aliquam dolor cupiditate eos perferendis harum veritatis accusantium adipisci ipsa molestiae! Vel cum nulla ea deserunt animi optio in nostrum, veniam recusandae veritatis soluta ratione, sint iusto. Sunt.",
      datetime:"July 29, 2024"
    }

   
  ]
  const [posts,setPosts] = useState(_posts_arr);
  const [search,setSearch] =useState('');
  const [searchResults, setSearchResults]=useState([]);
  const [postTitle, setPostTitle] =useState('');
  const [postbody, setPostbody] =useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    const filteredResults= posts.filter(
      post =>((post.body).toLowerCase()).includes(search.toLowerCase()) 
      ||
      ((post.title).toLowerCase()).includes(search.toLowerCase()) 

      );
      setSearchResults(filteredResults.reverse());


  },[posts,search])

  const handleDelete = (id) =>{
    const postList =posts.filter(post => post.id !==id);
    setPosts(postList);
    navigate('/');
  }

  const handlePostSubmit =(e) =>{
    e.preventDefault();

    const id= posts.length ? posts [posts.length -1].id +1 :1;
    const datetime= new Date().getTime();
    const newPost = {id,title:postTitle, datetime, body:postbody }
    const allPosts =[...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostbody('');
    navigate('/');

  }

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<HomePage posts={searchResults} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        <Route path="/new-post" element={<NewPost handleSubmit={handlePostSubmit} postTitle={postTitle} setPostTitle={setPostTitle}  postbody={postbody} setPostbody={setPostbody}/>} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
