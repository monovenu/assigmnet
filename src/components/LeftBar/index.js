import './index.css';
import {MenuList} from '@/constants'

const LeftBar = ({changeCurrentMenu}) => {


    return <div className='leftBar'>
        <ul className='menu'>
            {
                MenuList.map(item => {
                    return  <li onClick={() => changeCurrentMenu(item)} key={item} className='menuItem'>
                        <i className="iconfont icon-ICON2_API" />
                        {item}
                    </li>

                })
            }
        </ul>
    </div>
}
export default LeftBar;

