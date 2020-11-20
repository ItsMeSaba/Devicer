import React, { useState, useEffect } from 'react'
import './sidebar.css'

import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

import deviceList from '../../deviceList';

function Sidebar({ open, setOpen, displayDevice }) {
    let [search, setSearch] = useState('');

    return (
        <div className='sidebar' style={{ transform : `translateX(${open ? '0' : '-105%'})` }} >
            <div className='sidebarTop'>
                <ClearIcon onClick={setOpen} />
                <SidebarSearch setSearch={setSearch} />
            </div>

            <SidebarItems displayDevice={displayDevice} search={search}/>
        </div>
    )
}


function SidebarSearch({ setSearch }) {
    return (
        <div className="sidebarSearch">
            <input type='url' placeholder='Search' onChange={e => setSearch(e.target.value)}/>

            <SearchIcon />
        </div>
    )
}

function SidebarItems({ displayDevice, search }) {
    let array = Object.keys(deviceList);

    return array.map(x => {
        let name = deviceList[x].name.toLowerCase(); 
        let { imgSize } = deviceList[x];

        return (
            name.includes(search.toLowerCase()) && <SidebarRow 
                                                        key={x} 
                                                        id={x} 
                                                        name={name} 
                                                        displayDevice={displayDevice}
                                                        imgSize={imgSize}
                                                    />
        )
    })
}

function SidebarRow({ name, id, displayDevice, imgSize }) {
    let [open, setOpen] = useState(false);

    return (
        <div  className='sidebarRow'>
            <img 
                src={require(`./images/${id}.png`).default}
                style={{ width : imgSize }}
            />

            <h4>{ name }</h4>
        
            <AddIcon 
                onClick={() => {
                    displayDevice(id);
                    setOpen(!open);
                }}
                style={{ transform: `rotate(${open ? '45deg' : '0deg'})` }}
            />
        </div>
    )
}

export default Sidebar
