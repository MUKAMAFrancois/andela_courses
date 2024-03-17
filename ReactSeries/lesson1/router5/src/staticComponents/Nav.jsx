import React from 'react'
import { Link } from 'react-router-dom';

function Nav({search, setSearch}) {
  return (
    <nav className='Nav'>
        
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search Post:</label>
        <input 
          placeholder='Search Post...'
          type='text'
          id='search'  
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
         />
        </form>

        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>            
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/new-post'>New Post</Link>
          </li>
        </ul>

        
    </nav>
  )
}

export default Nav;