import React from 'react'
import {Link} from 'react-router-dom';

function PostComponent ({post}) {

  return (
    <article className='post'>

      <Link to={`post/${post.id}`}>

        <h2>{post.title}</h2>
        <p className='postDate'>{post.datetime}</p>

      </Link>

      <p className='postBody'>
        {
          (post.body).length <=25 
                  ? post.body
                  : `${(post.body).slice(0,25)} ....`
        }

      </p>
    </article>
  )
}

function Feed ({posts}){

   return (
        <>
        {
          posts.map(post=>(
            <PostComponent key={post.id} post ={post}/>
          ))
        }
      </>
   )

}

function HomePage({posts}) {
  return (
    <main className='Home'>
    {posts.length ? 
                  (<Feed posts={posts}/>)
                  :(
                    <p>
                      No Posts to display.
                    </p>
                  )
    }
     
    </main>
  )
}
export default HomePage