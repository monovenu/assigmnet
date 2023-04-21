import { debounce } from 'lodash';
import './index.css';


const Header = ({currentMenu, getList,  openModal}) => {
    const search = debounce((e) => {
      getList(e.target.value.trim())
    }, 200)

    return <div className='content-header'>
            <div className='title'>{currentMenu}</div>
            <div className='input-area'>
                <div className='input-wrap'>
                  <i className="iconfont icon-a-ESMiconset_Search" />
                  <input className='input' onInput={search} placeholder='Search client name, board name, tags, requestor'/>
                </div>
                <div className='createBtn-wrap'>
                  <i className="iconfont icon-a-ESMiconset_New" />
                  <button onClick={openModal} className='createBtn'>Create SDK</button>
                </div>
            </div>
        </div>
}
export default Header;

