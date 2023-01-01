import { useState, useContext } from 'react'
import './sidebar.sass'

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

import deviceList from '../../data/deviceList';
import { DisplayDevice } from '../../types';
import { GlobalContext } from '../../context';
import getDeviceIcon from './getDeviceIcon';

interface Args {
    isOpen: boolean,
}

function Sidebar(args: Args) {
    const { isOpen } = args;
    const { toggleDeviceListSidebar } = useContext(GlobalContext);
    const [search, setSearch] = useState('');

    return (
        <div className='sidebar' style={{ transform : `translateX(${isOpen ? '0' : '-105%'})` }} >
            <div className='sidebarTop'>
                <ClearIcon onClick={toggleDeviceListSidebar} />
                <Search setSearch={setSearch} />
            </div>

            <Devices search={search} />
        </div>
    )
}



interface SidebarSearchArgs {
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

function Search(args: SidebarSearchArgs) {
    const { setSearch } = args;
    
    return (
        <div className="sidebarSearch">
            <input type='url' placeholder='Search' onChange={e => setSearch(e.target.value)}/>

            <SearchIcon />
        </div>
    )
}



interface SidebarItemsArgs {
    search: string,
}

function Devices(args: SidebarItemsArgs) {
    const { search } = args;
    let deviceIds = Object.keys(deviceList);

    // Filter based on search term
    deviceIds = deviceIds.filter(deviceId => deviceList[deviceId].name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="devices">
            {
                deviceIds.map(deviceId => <Device deviceId={deviceId} />)
            }
        </div>
    )
}

interface SibedarItemArgs {
    deviceId: string
}

function Device(args: SibedarItemArgs) {
    const { name, id, imgSize } = deviceList[args.deviceId];
    const { toggleDevice } = useContext(GlobalContext);
    let [isOpen, setIsOpen] = useState(false);

    return (
        <div  className='sidebarRow'>
            <img 
                alt={id}
                src={getDeviceIcon(id)}
                style={{ width : imgSize }}
            />

            <h4>{ name }</h4>
        
            <AddIcon 
                onClick={() => {
                    toggleDevice(id);
                    setIsOpen(isOpen => !isOpen);
                }}
                style={{ transform: `rotate(${isOpen ? '45deg' : '0deg'})` }}
            />
        </div>
    )
}

export default Sidebar
