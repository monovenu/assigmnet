import { useState } from "react";
import LeftBar from '@/components/LeftBar'
import Content from '@/components/Content'
import {MenuName} from '@/constants'
import './index.css';


const Layout = () => {
    const [currentMenu, setCurrentMenu] = useState(MenuName.User)

    const changeCurrentMenu = (name) => {
        setCurrentMenu(name)
    }


    return <div className='layout'>
        <LeftBar currentMenu={currentMenu} changeCurrentMenu={changeCurrentMenu}/>
        <Content currentMenu={currentMenu}/>
    </div>
}
export default Layout;

