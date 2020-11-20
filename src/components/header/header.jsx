import React, { useState } from 'react'
import './header.css'

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
// import CameraAltIcon from '@material-ui/icons/CameraAlt';
import SettingsIcon from '@material-ui/icons/Settings';


function Header({ setOpen, setOpenRight, setIframe }) {
    return (
        <div className='header'>
            <div className="openSidebar">
                <MenuIcon onClick={setOpen} fontSize='medium' />
            </div>

            <WebsiteSearch 
                setIframe={setIframe}
                setOpenRight
            />

            <div className='settings' onClick={setOpenRight}>
                <SettingsIcon />
            </div>
        </div>
    )
}

function WebsiteSearch({ setIframe }) {
    let [url, setUrl] = useState('');

    return (
        <form className="websiteSearch" id='url' onSubmit={e => {
            e.preventDefault();
            setIframe(url);
        }}>
            <input type="url" id='url' placeholder='Website URL' onChange={e => setUrl(e.target.value)} />

            <button type="submit">
                <SearchIcon />
            </button>
        </form>
    )
}

export default Header
