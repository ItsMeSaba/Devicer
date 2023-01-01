import { useState, useEffect } from 'react'
import Draggable from 'react-draggable'
import SettingsIcon from '@mui/icons-material/Settings';
import './device.sass';

function Device({ name, iframe, biggestZindex, setBiggestZindex, defaultScale }) {
    let [scale, setScale] = useState(defaultScale);
    let [settings, setSettings] = useState(false);
    let [scrolling, setScrolling] = useState(true);
    let [zIndex, setZindex] = useState(1);

    useEffect(() => {
        document.querySelector('.canvas').addEventListener('click', function(e) {
            if (this !== e.target) return false;

            setSettings(false)
        })
    }, [])

    function incrZindex(setBiggestZindex) {
        if(zIndex === biggestZindex) return false;

        setZindex(biggestZindex+1);
        setBiggestZindex(biggestZindex+1);
    }

    return (
        <Draggable defaultPosition={{ x: window.innerWidth/2, y: window.innerHeight/4 }}>
            <div className="draggableDiv" style={{zIndex: zIndex}}>
                <div className={`device ${name}`}
                    style={{transform: `scale(${scale})`}} 
                    onMouseEnter={() => setSettings(true)}
                    onMouseLeave={() => setSettings(false)}
                    onTouchStart={() => {
                        incrZindex(setBiggestZindex)
                        setSettings(true)
                    }}
                    onMouseDown={() => {
                        incrZindex(setBiggestZindex)
                    }}
                >
                    <Settings 
                        displaySettIcon={settings}
                        setScale={setScale}
                        scale={scale}
                        setScrolling={() => setScrolling(!scrolling)}
                        defaultScale={defaultScale}
                    />

                    <div className="container">
                        <iframe src={iframe} 
                            scrolling={scrolling ? 'yes' : 'no'} 
                            frameBorder="0"
                            title={name}
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </Draggable>
    )
}

function Clickable({ children, event, className, style }) {
    return (
        <div className={`clickable ${className ? className : ''}`}
            onClick={event}
            onTouchEnd={event}
            style={{...style}}
        >
            { children }
        </div>
    )
}

function Settings({ displaySettIcon, setScale, scale, setScrolling, defaultScale }) {
    let [settings, setSettings] = useState(false);

    useEffect(() => {
        document.querySelector('.canvas').addEventListener('click', function(e) {
            if (this !== e.target) return false;

            setSettings(false)
        })
    }, [])

    return (
        <>
            <Clickable className="settingsIcon"
                event={() => setSettings(!settings)}
                style={{
                    display : displaySettIcon ? 'initial' : 'none',
                    transform : `scale(${.8/scale})`
                }}
            >
                <SettingsIcon />
            </Clickable>

            <div className="settings" style={{ 
                display : settings ? 'initial' : 'none', 
                transform : `scale(${.75/scale}) translateX(85%)`
            }}>
                <div className="scrollable">
                    <p>Hide Scrollbars(Disables Scrolling)</p>

                    <Clickable event={e => e.target.click()}>
                        <input type="checkbox" onChange={setScrolling} />
                    </Clickable>
                </div>

                <div className="scales">
                    <Clickable event={() => { setScale(defaultScale*0.75); console.log(defaultScale) }}>
                        <p>.5x</p>
                    </Clickable>

                    <Clickable event={() => setScale(defaultScale)}>
                        <p>1x</p>
                    </Clickable>

                    <Clickable event={() => setScale(defaultScale*1.25)}>
                        <p>2x</p>
                    </Clickable>

                    <Clickable event={e => e.target.focus()}>
                        <input type="number" 
                            placeholder='Custom'
                            onChange={e => setScale(defaultScale*parseFloat(e.target.value))}
                        />
                    </Clickable>
                </div>
            </div>
        </>
    )
}

export default Device
