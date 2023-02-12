import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from "./FullWidthLayout.module.scss"


const cx = classNames.bind(styles)
function FullWidthLayout({ children }) {
    const path = useLocation()

    return (<div className={cx('wrapper')}>
        <div className={cx('header')}>
            <div className={cx('content-header')}>
                <Header />
            </div>
        </div>
        <div className={cx('container')}>
            <div className={cx('sidebar-wrapper')} >
                <Sidebar suggested={path.pathname === '/@chuong' ? (false) : (true)}
                    following={path.pathname === '/live' ? (false) : (true)}
                    infoDes={path.pathname === '/live' ? (false) : (true)} />
            </div>
            <div className={cx("content")}>
                {children}
            </div>
        </div>
    </div>);
}

export default FullWidthLayout;