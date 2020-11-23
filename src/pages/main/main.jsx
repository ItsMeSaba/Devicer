import React, { useState } from 'react'
import './main.css'

import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';

import deviceListImport from '../../deviceList';
import Canvas from '../../components/canvas/canvas';
import RightSidebar from '../../components/rightSidebar/rightSidebar';

function Main() {
    let [open, setOpen] = useState(true);
    let [openRight, setOpenRight] = useState(false);
    let [deviceList, setDeviceList] = useState(deviceListImport); 
    let [iframe, setIframe] = useState('');
    let [bgColor, setbgColor] = useState('rgb(245, 245, 245)');
    let [bgImage, setbgImage] = useState('');

    function displayDevice(device) {
        let deviceListHolder = {...deviceList};
        deviceListHolder[device].display = !deviceListHolder[device].display;

        setDeviceList(deviceListHolder);
    }

    function changeZindex(device) {
        let deviceListHolder = {...deviceList};
        deviceListHolder[device].zIndex = ++deviceListHolder[device].zIndex;

        setDeviceList(deviceListHolder);
    }

    return (
        <div className='main'>
            <Header 
                setOpen={() => setOpen(true)}
                setOpenRight={() => setOpenRight(true)}
                setIframe={e => setIframe(e)} 
            />

            <Sidebar 
                setOpen={() => setOpen(false)}
                open={open}
                displayDevice={displayDevice}
            />

            <div 
                className='canvas'
                style={{backgroundColor: bgColor, backgroundImage : `url(${bgImage})`}}
            >
                <Canvas
                    iframe={iframe}
                    changeZindex={changeZindex}
                />
            </div>

            <RightSidebar 
                setOpenRight={() => setOpenRight(false)}
                openRight={openRight}
                setbgColor={setbgColor}
                setbgImage={setbgImage}
            />
        </div>
    )
}

export default Main