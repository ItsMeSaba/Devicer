import React, { useState } from 'react'
import './header.sass'

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';

import { useContext } from "react"
import { GlobalContext } from '../../context';

function Header() {
    const { toggleBackgroundOptionsSidebar, toggleDeviceListSidebar } = useContext(GlobalContext);

    return (
        <div className='header'>
            <div className="openSidebar">
                <MenuIcon onClick={toggleDeviceListSidebar} fontSize='medium' />
            </div>

            <WebsiteSearch />

            <div className='settings' onClick={toggleBackgroundOptionsSidebar}>
                <SettingsIcon />
            </div>
        </div>
    )
}

function WebsiteSearch() {
    const { setWebsiteUrl } = useContext(GlobalContext);
    let [url, setUrl] = useState('');

    function setNewWebsiteUrl(userInput: string) {
        const regex = /^(http|https).+$/;

        if (!regex.test(userInput)) userInput = "https://" + userInput;

        setWebsiteUrl(userInput);
    }

    return (
        <form className="websiteSearch" id='url' onSubmit={e => {
            e.preventDefault();
            
            setNewWebsiteUrl(url);
        }}>
            <input id='url' placeholder='Website URL' onChange={e => setUrl(e.target.value)} />

            <button type="submit">
                <SearchIcon />
            </button>
        </form>
    )
}

export default Header
