import { createContext } from "react";


interface GlobalContextType {
    toggleDeviceListSidebar: () => void
    toggleBackgroundOptionsSidebar: () => void
    setWebsiteUrl: (websiteName: string) => void,
    toggleDevice: (deviceId: string) => void, 
}

export const GlobalContext = createContext<GlobalContextType>({} as any);