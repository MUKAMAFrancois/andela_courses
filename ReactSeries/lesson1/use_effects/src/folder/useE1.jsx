/* 
React useEffect hook handles the effects of the dependency array.
 The useEffect Hook allows us to perform side effects on the components.
  fetching data, directly updating the DOM and
   timers are some side effects.It is called
 every time any state if the dependency array is modified or updated.
*/
import React, {useState,useEffect} from 'react';
import axios from 'axios';

export function ClickIt() {

    const [count,setCount] = useState(0);
    useEffect(()=>{
        document.getElementById('click_paragraph').innerHTML = `You clicked ${count} times`
    },[count])
  return (
    <div>
        <p id='click_paragraph'></p>
        <button id='click_btn' onClick={()=>setCount(count+1)}>Click me</button>
    </div>
  )
}


export function SubscribeComponent(){
    const [subscribed,setSubscription] = useState(false);

    const handleSubscription = ()=>{
        setSubscription(!subscribed); // change it to true, toggle state
    }

    return (
        <div>
            <h2>Subscribe to our newsletters</h2>
            <button className='sub_btn' onClick={handleSubscription} 
            style={{backgroundColor:subscribed ? 'red':'#065f6a'}} >
            {subscribed?'Unsubscribe':'Subscribe'}
            </button>
        </div>
    )
}


export function FetchDataComponent() {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        const fetchBlogs = async () =>{
            try{
                const response = await axios.get('https://mukamadeployts.onrender.com/blogs');
                setBlogs(response.data.blogs.slice(0,5));
            }catch (error){
                console.error("Error", error);
            }
        } ;
    fetchBlogs();

    },[]);

    return (
        <div>
            <h3>Blogs Render</h3>
            <ul>
                {blogs.map(blog=>(
                    <li key={blog._id}>{blog.title}</li>
                ))}
            </ul>
        </div>
    )

}
