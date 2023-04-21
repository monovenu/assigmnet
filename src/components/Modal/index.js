import { useState, useEffect } from "react";
import './index.css';


const Modal = ({
        close,
        width=600,
        title='title',
        children
    }) => {
    const [showIn, setShowIn] = useState(false)

    useEffect(() => {
        show();
        return hide;
    }, [])

    const show = () => {
        setShowIn(true)
    }
    const hide = () => {
        setShowIn(false)
        const timer = setTimeout(function(){
            close()
            clearTimeout(timer);
        }, 200);
    }


    return <div className={`modal ${showIn ? 'in' : ''}`}>
    <div className="dialog" style={{width:width + 'px'}}>
        <header className="dialog-header">
            {title}
            <i className="iconfont icon-guanbi closeBtn"  onClick={hide} />
        </header>
        <div className="dialog-content">
            {React.cloneElement(children, {hide})}
        </div>
    </div>
</div>
}
export default Modal;

