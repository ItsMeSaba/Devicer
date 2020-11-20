import React from 'react'
import Device from '../device/device';
import './iphone6.css'

function Iphone6({ iframe, biggestZindex, setBiggestZindex, defaultScale }) {
    return <Device 
        name='iphone6' 
        iframe={iframe} 
        biggestZindex={biggestZindex} 
        setBiggestZindex={setBiggestZindex} 
        defaultScale={defaultScale}
    />
}

export default Iphone6
