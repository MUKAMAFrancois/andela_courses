import React from 'react'

function NewPost({handleSubmit,postTitle,setPostTitle,postbody,setPostbody}) {
  return (
    <main className='NewPost'>
    <h1>NewPost</h1>
    <form className='newPostForm' onSubmit={handleSubmit}>
    <label htmlFor='postTitle'> Title: </label>
    <input
      id="postTitle"
      type='text'
      value={postTitle}
      onChange={(e) => setPostTitle(e.target.value)}
      required
    />
        <label htmlFor='postbody'> Content: </label>
    <textarea
      id="postbody"
      type='text'
      value={postbody}
      onChange={(e) => setPostbody(e.target.value)}
      required
    />
    <input type='submit' value="Add Post" />

    </form>
  </main>
  )
}

export default NewPost