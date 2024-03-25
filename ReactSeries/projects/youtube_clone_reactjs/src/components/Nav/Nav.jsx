import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faVideo, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import './nav.css';


function Nav() {

  const [sidebar, setSidebar] = React.useState(true);

  const handleSidebar = () => {
    setSidebar(!sidebar);
    alert(sidebar)
  }

  return (
    <nav>
      <div className="menu">
        <FontAwesomeIcon 
        icon={faBars}
        onClick={handleSidebar}
               />
      </div>
      <div className="logo">
        <FontAwesomeIcon icon={faYoutube} />
        <h1>ViTube</h1>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </div>
      <div className="right-icons">
        <FontAwesomeIcon className='right-icon' icon={faVideo} />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAdhJREFUaAXtl8tthDAQhnkVsKkkV7hRwpaw6QAB95AGEB1s0snmxDXpgO1gC+ARj4QlloeNbQYUaSytwJ7xjL9/FrAtixopQAqQAqTAAQq4B+R8SpkkyTUIgpeyLH+eDIqdQ0EAwrbtC/udfd+/m8DYIvA0Td9FdpGtruuvoiiqJR8OMbS3bfuW5/nncGztvSdxzCT2RbPned/MWM05zEGAn+M41ziOLR0YZy4R5tgSBM/Zw1x4f+11VxAZBF+0DsxuIGshdGF2AVGF0IFBB9GFUIVBBTGFUIHBBMngY8cXY3qFFwAT5rwUBw2k67qC/X6XEquOQ6ymaW5L89BAWDUeLHG4BUwPEbKdwmN3EEgIiU1h1kBALrSKQHBoJjBrISAPOogujArEbiCqMKoQEF+2+4UdrFaDh308Ef5mURSFruvemP11bIe+DgTME55HwAGjMZjTHIwuBKzxEBBIPIYxgTgUZAgD9/CaFn0nwEfUhBXZ8qgriHXqFzh5pvjCZcdm8JM97BkPpnqdOepuGWuynF2+I5OsCAMEgiCqUUiqiJF8CJOpIgiiGoWkihjJhzCZKoIgqlFIqoiRfAiTZbvfD92cbOtdjeZuGWsUmrqkAClACvw3Bf4A8SQCA+GGGlgAAAAASUVORK5CYII="
          alt=""
        />
        <FontAwesomeIcon className='right-icon' icon={faBell} />
        <FontAwesomeIcon className='right-icon' icon={faUser} />
      </div>
    </nav>
  );
}

export default Nav;