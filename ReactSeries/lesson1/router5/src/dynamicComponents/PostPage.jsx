import React from 'react'
import {useParams, Link} from 'react-router-dom'
function PostPage({posts, handleDelete}) {
  const {id} = useParams(); // this is how we called it. /id
  // get individual post
  const post =posts.find(post => (post.id).toString() === id);
  return (
  <main className='postPage'>
      <article className='post'>
      {/*   {post &&}  means that if post is there*/}

      {post &&
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>
            <p className='postBody'>{post.body}</p>

            <button onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
      }

      {!post &&
        <>
        <h2>page Not Found!</h2>
        <p>Well, that's disappointing.</p>
        <Link to='/'>Visit our HomePage!</Link>

        </>
      }

      </article>
    </main>
  )
}

export default PostPage