import React, { useState } from 'react'
import './main.sass'

import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';

import deviceListImport from '../../data/deviceList';
import Canvas from '../../components/canvas/Canvas';
import RightSidebar from '../../components/rightSidebar/RightSidebar';
import { GlobalContext } from '../../context';

export default function Main() {
    let [isOpenDeviceList, setIsOpenDeviceList] = useState(true);
    let [openRight, setOpenRight] = useState(false);
    let [devices, setDevices] = useState(deviceListImport); 
    let [websiteUrl, setWebsiteUrl] = useState('');
    let [bgColor, setbgColor] = useState('rgb(245, 245, 245)');
    let [bgImage, setbgImage] = useState('');

    function toggleDevice(deviceId: string) {
        let devicesCopy = { ...devices };
        devicesCopy[deviceId].display = !devicesCopy[deviceId].display;

        setDevices(devicesCopy);
    }

    // function changeZindex(deviceId: string) {
    //     const deviceListCopy = { ...devices };
    //     deviceListCopy[deviceId].zIndex = ++deviceListCopy[deviceId].zIndex;

    //     setDevices(deviceListCopy);
    // }

    return (
        <GlobalContext.Provider value={{
            toggleDeviceListSidebar: () => setIsOpenDeviceList(isOpen => !isOpen),
            toggleBackgroundOptionsSidebar: () => setOpenRight(isOpen => !isOpen),
            setWebsiteUrl: (websiteUrl: string) => setWebsiteUrl(websiteUrl),
            toggleDevice 
        }}>
            <div className='main'>
                <Header />

                <Sidebar isOpen={isOpenDeviceList} />

                <div 
                    className='canvas'
                    style={{backgroundColor: bgColor, backgroundImage : `url(${bgImage})`}}
                >
                    <Canvas
                        websiteUrl={websiteUrl}
                        // changeZindex={changeZindex}
                    />
                </div>

                <RightSidebar 
                    openRight={openRight}
                    setBgColor={setbgColor}
                    setBgImage={setbgImage}
                />
            </div>
        </GlobalContext.Provider>
    )
}