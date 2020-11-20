import React, { useState } from 'react'
import './canvas.css'

import deviceList from "../../deviceList";

import '../../devices/iphone5s/iphone5s.css'
import '../../devices/iphone4s/iphone4s.css'
import '../../devices/iphone6/iphone6.css'
import '../../devices/macbookAir13_2020/macbookAir13_2020.css'
import '../../devices/iMac5k/iMac5k.css'
import '../../devices/iphoneX/iphoneX.css'

function Canvas({ iframe }) {
    let [biggestZindex, setBiggestZindex] = useState(2);

    return (
        // <div className='canvas'>
        <>
            <DisplayDevices 
                array={Object.keys(deviceList)}
                object={deviceList}
                iframe={iframe}
                // changeZindex={changeZindex}
                biggestZindex={biggestZindex}
                setBiggestZindex={e => setBiggestZindex(e)}
                />
        </>
        // </div>
    )
}

function DisplayDevices({ array, object, iframe, biggestZindex, setBiggestZindex }) {
    return (
        array.map(x => object[x].display && object[x].module(iframe, biggestZindex, setBiggestZindex))
    )
}


export default Canvas