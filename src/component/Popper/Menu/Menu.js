import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { useState } from "react";
import PropTypes from 'prop-types'

import { Wrapper as PopperWrapper } from "~/component/Popper";
import styles from "./Menu.module.scss"
import MenuItem from "./MenuItem";
import Header from "./Header";

const cx = classNames.bind(styles)

const nonFn = () => { }
function Menu({ children, item = [], onChange = nonFn }) {
    const [history, sethistory] = useState([{ data: item }])
    const current = history[history.length - 1]
    const renderitem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    sethistory((prev) => [...prev, { data: item.children }])
                }
                else {

                    if (item.onClick) {
                        console.log(1);
                        item.onClick()
                    }
                    else {
                        console.log(2);

                        onChange(item)
                    }
                }
            }} />
        })
    }
    return (
        <Tippy
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            hideOnClick={false}
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs} >
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title={'Language'} onBack={() => {
                            sethistory(pre => pre.slice(0, pre.length - 1))
                        }} />}
                        <div className={cx('body-item')}>
                            {renderitem()}
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => sethistory(pre => pre.slice(0, 1))}>
            {children}
        </Tippy>);
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    item: PropTypes.array,
}
export default Menu;