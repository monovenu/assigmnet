import React,{ useState, useEffect } from "react";
import './index.css';

/**
 * 
 * @param
 *  close:关闭modal的方法
 *  width:弹窗宽度，默认600px
 *  title:弹窗标题
 *  children:modal的子节点，显示在modal的内容区域
 * @returns 带显隐动画的弹窗
 */
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

