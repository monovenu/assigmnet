import './index.css';


const Header = ({currentMenu}) => {
    

    return <div className='header'>
            <div className='title'>{currentMenu}</div>
            <div className='input-area'>
                <div className='input-wrap'>
                  <i className="iconfont icon-a-ESMiconset_Search"></i>
                  <input className='input' placeholder='Search client name, board name, tags, requestor'/>
                </div>
                <div className='createBtn-wrap'>
                  <i className="iconfont icon-a-ESMiconset_New"></i>
                  <button className='createBtn'>Create SDK</button>
                </div>
            </div>
        </div>
}
export default Header;

