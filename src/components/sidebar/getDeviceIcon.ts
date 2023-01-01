import iMac5k from "./images/iMac5k.png"
import iphone4s from "./images/iphone4s.png"
import iphone5s from "./images/iphone5s.png"
import iphone6 from "./images/iphone6.png"
import iphoneX from "./images/iphoneX.png"
import macbookAir13_2020 from "./images/macbookAir13_2020.png"

const icons: { [key: string]: any } = {
    iMac5k,
    iphone4s,
    iphone6,
    iphoneX,
    iphone5s,
    macbookAir13_2020
}

export default function getDeviceIcon(deviceId: string) {
    return icons[deviceId];
}