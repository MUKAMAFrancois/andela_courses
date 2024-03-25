import React from 'react';
import game_icon from '../../assets/game_icon.png';
import home from '../../assets/home.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';

import './sidebar.css';

function SideBar() {


  return (
    <div className='sidebar'>
        <div className='shortcut-links'>
            <div className='side-link'>
                <img src={home} alt='home' />
                <p>Home</p>
            </div>
            <div className='side-link'>
                <img src={game_icon} alt='game' />
                <p>Games</p>
            </div>
            <div className='side-link'>
                <img src={automobiles} alt='automobiles' />
                <p>Automobiles</p>
            </div>
            <div className='side-link'>
                <img src={sports} alt='sports' />
                <p>Sports</p>
            </div>
            <div className='side-link'>
                <img src={entertainment} alt='entertainment' />
                <p>Entertainment</p>
            </div>
            <div className='side-link'>
                <img src={tech} alt='tech' />
                <p>Tech</p>
            </div>
            <div className='side-link'>
                <img src={music} alt='music' />
                <p>Music</p>
            </div>
            <div className='side-link'>
                <img src={blogs} alt='blogs' />
                <p>Blogs</p>
            </div>
            <div className='side-link'>
                <img src={news} alt='news' />
                <p>News</p>
            </div>

            <hr></hr>
        <div className='subscribed-list'>
            <h3>Subscribed</h3>
            <div className='subscribed-channel'>
                <img src={jack} alt='jack' />
                <p>PewDiePie</p>
            </div>
            <div className='subscribed-channel'>
                <img src={simon} alt='simon' />
                <p>MrBeast</p>
            </div>
            <div className='subscribed-channel'>
                <img src={tom} alt='tom' />
                <p>Justin Bieber</p>
            </div>
            <div className='subscribed-channel'>
                <img src={megan} alt='megan' />
                <p>60 Minutes</p>
            </div>
            <div className='subscribed-channel'>
                <img src={cameron} alt='cameron' />
                <p>Man City</p>
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default SideBar