import React from 'react'
import Calculator from './calculator/calc';
import ChangeColor from './colorChanger/change_color';

function Main() {
  return (
    <div className='main_cont'>
      <div>
        <Calculator/>
      </div>
      <div>
        <ChangeColor/>
      </div>
    </div>
  )
}

export default Main