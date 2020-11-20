import React from 'react'
import Device from '../device/device'
import './iphone4s.css';

function Iphone4s({ iframe, biggestZindex, setBiggestZindex, defaultScale }) {
    return <Device 
        name='iphone4s' 
        iframe={iframe} 
        biggestZindex={biggestZindex} 
        setBiggestZindex={setBiggestZindex} 
        defaultScale={defaultScale}
    />
}

export default Iphone4s