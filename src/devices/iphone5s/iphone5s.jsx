import React from 'react'
import Device from '../device/device';
import './iphone5s.css' 

function Iphone5s({ iframe, biggestZindex, setBiggestZindex, defaultScale }) {
    return <Device 
        name='iphone5s' 
        iframe={iframe} 
        biggestZindex={biggestZindex} 
        setBiggestZindex={setBiggestZindex}
        defaultScale={defaultScale}
    />
} 

export default Iphone5s