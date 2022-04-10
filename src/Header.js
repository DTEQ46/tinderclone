import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className='header'>
        <IconButton>
          <PersonIcon fontSize='large' className='headerIcon'></PersonIcon>
        </IconButton>

        <img
          className='headerLogo'
          src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png'
          alt='tnderLogo'
        />

        <IconButton>
          <ForumIcon fontSize='large' className='headerIcon'></ForumIcon>
        </IconButton>
        </div>
    )
}

export default Header
