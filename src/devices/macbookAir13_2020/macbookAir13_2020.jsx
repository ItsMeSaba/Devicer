import React from 'react';
import Device from '../device/device';
import './macbookAir13_2020.css';

function macbookAir13_2020({ iframe, biggestZindex, setBiggestZindex, defaultScale }) {
    return <Device 
                name='macbookAir13_2020' 
                iframe={iframe} 
                biggestZindex={biggestZindex} 
                setBiggestZindex={setBiggestZindex} 
                defaultScale={defaultScale}
            />
}


export default macbookAir13_2020
