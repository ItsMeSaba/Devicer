import React, { useState } from 'react'
import './canvas.sass'

import deviceList from "../../data/deviceList";

import '../../devices/iphone5s/iphone5s.sass'
import '../../devices/iphone4s/iphone4s.sass'
import '../../devices/iphone6/iphone6.sass'
import '../../devices/macbookAir13_2020/macbookAir13_2020.sass'
import '../../devices/iMac5k/iMac5k.sass'
import '../../devices/iphoneX/iphoneX.sass'

interface Args {
    websiteUrl: string
}

function Canvas(args: Args) {
    const { websiteUrl } = args;
    let [biggestZindex, setBiggestZindex] = useState(2);

    return (
        // <div className='canvas'>
        <>
            <DisplayDevices 
                deviceIds={Object.keys(deviceList)}
                object={deviceList}
                iframe={websiteUrl}
                // changeZindex={changeZindex}
                biggestZindex={biggestZindex}
                setBiggestZindex={e => setBiggestZindex(e)}
                />
        </>
        // </div>
    )
}

interface DisplayDevicesArgs {
    deviceIds: string[],
    object: any,
    iframe: any,
    biggestZindex: number,
    setBiggestZindex: (...args: any) => void
}

function DisplayDevices(args: DisplayDevicesArgs) {
    const { deviceIds, object, iframe, biggestZindex, setBiggestZindex } = args;

    return (
        <>
            { deviceIds.map(deviceId => object[deviceId].display && object[deviceId].module(iframe, biggestZindex, setBiggestZindex)) }
        </>
    )
}


export default Canvas