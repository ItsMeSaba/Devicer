
// import Iphone6 from "./devices/iphone6/iphone6";
// import Iphone5s from "./devices/iphone5s/iphone5s";
// import Iphone4s from "./devices/iphone4s/iphone4s";
// import MacbookAir13_2020 from "./devices/macbookAir13_2020/macbookAir13_2020";

import Device from '../devices/device/device';


// function DeviceData(name, id, defaultScale = 0.5) {
// function DeviceData(name: string, id, {scale, size} = {}) {
//     this.name = name;
//     this.defaultScale = scale || .5;
//     this.imgSize = size || '1.5rem';
//     this.display = false;
//     this.module = function(iframe, biggestZindex, setBiggestZindex) {
//         return <Device 
//             key={id} 
//             name={id} 
//             iframe={iframe}
//             biggestZindex={biggestZindex}
//             setBiggestZindex={setBiggestZindex}
//             defaultScale={this.defaultScale}
//         />
//     }
// }

class DeviceData {
    name: string;
    id: string;
    display: boolean;
    defaultScale: number;
    imgSize: string;
    module: (...args: any) => any

    constructor(deviceName: string, id: string, dimensions?: { scale: number, size: string }) {
        this.name = deviceName;
        this.id = id;
        this.display = false;
        this.defaultScale = dimensions?.scale || .5;
        this.imgSize = dimensions?.size || '1.6rem';
        this.module = function(iframe, biggestZindex, setBiggestZindex) {
            return <Device 
                key={id} 
                name={id} 
                iframe={iframe}
                biggestZindex={biggestZindex}
                setBiggestZindex={setBiggestZindex}
                defaultScale={this.defaultScale}
            />
        }
    }
}

const devices: { [key: string]: DeviceData } = {
    iphoneX : new DeviceData('iphone X', 'iphoneX'),
    iphone6 : new DeviceData('iphone 6', 'iphone6'),
    iphone5s : new DeviceData('iphone 5s', 'iphone5s'),
    iphone4s : new DeviceData('iphone 4s', 'iphone4s'),
    macbookAir13_2020 : new DeviceData('Macbook Air 13"', 'macbookAir13_2020', { scale : .25, size : '4rem' }),
    iMac5k : new DeviceData('iMac 5k', 'iMac5k', { scale : .1, size : '4rem' })
}

export default devices;


// export default {
//     iphoneX : new DeviceData('iphone X', 'iphoneX'),
//     iphone6 : new DeviceData('iphone 6', 'iphone6'),
//     iphone5s : new DeviceData('iphone 5s', 'iphone5s'),
//     iphone4s : new DeviceData('iphone 4s', 'iphone4s'),
//     macbookAir13_2020 : new DeviceData('Macbook Air 13"', 'macbookAir13_2020', { scale : .25, size : '3rem' }),
//     iMac5k : new DeviceData('iMac 5k', 'iMac5k', { scale : .1, size : '3rem' })
// }
// export default {
//     iphone6 : {
//         defaultScale : .5,
//         display : false,
//         name : 'Iphone 6',
//         module : function(iframe, biggestZindex, setBiggestZindex) {
//             return <Iphone6 
//                 key='iphone6' 
//                 iframe={iframe}
//                 biggestZindex={biggestZindex}
//                 setBiggestZindex={setBiggestZindex}
//                 defaultScale={this.defaultScale}
//             />
//         }
//     },
//     iphone5s : {
//         defaultScale : .5,
//         display : false,
//         name : 'Iphone 5s',
//         module : function(iframe, biggestZindex, setBiggestZindex) {
//             return <Iphone5s 
//                 key='iphone5s' 
//                 iframe={iframe}
//                 biggestZindex={biggestZindex}
//                 setBiggestZindex={setBiggestZindex}
//                 defaultScale={this.defaultScale}
//             />
//         }
//     },
//     iphone4s : {
//         defaultScale : .5,
//         display : false,
//         name : 'Iphone 4s',
//         module : function(iframe, biggestZindex, setBiggestZindex) {
//             return <Iphone4s 
//                 key='iphone4s' 
//                 iframe={iframe}
//                 biggestZindex={biggestZindex}
//                 setBiggestZindex={setBiggestZindex}
//                 defaultScale={this.defaultScale}
//             />
//         }
//     },
//     macbookAir13_2020 : {
//         defaultScale : .25,
//         display : false,
//         name : 'Macbook Air 13"',
//         module : function(iframe, biggestZindex, setBiggestZindex) {
//             return <MacbookAir13_2020 
//                 key='iphone4s' 
//                 iframe={iframe}
//                 biggestZindex={biggestZindex}
//                 setBiggestZindex={setBiggestZindex}
//                 defaultScale={this.defaultScale}
//             />
//        }
//     }
// } 

