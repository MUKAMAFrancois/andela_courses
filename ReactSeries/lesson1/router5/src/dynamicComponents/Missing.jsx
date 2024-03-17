import React from 'react'
import {Link} from 'react-router-dom';

function Missing() {
  return (
    <div>
       <>
        <h2>page Not Found!</h2>
        <p>Well, that's disappointing.</p>
        <Link to='/'>Visit our HomePage!</Link>

        </>
    </div>
  )
}

export default Missing