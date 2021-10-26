import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            FinWork
          </Link>
          <div className='nav-search'>
            <Link to ='/'><i class="fa fa-fw fa-search"></i></Link><input className="textSearch" placeholder="Search"/>
            </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/myjobs' className='nav-links' onClick={closeMobileMenu}>
                My Jobs
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Invited Jobs
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <i class="fa fa-bell" aria-hidden="true"></i>
              </Link>
            </li> 
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <i class="fa fa-user-circle" aria-hidden="true"></i>
              </Link>
            </li>   
        </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;