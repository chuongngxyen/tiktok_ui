import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar";
import styles from "./DefaultLayout.module.scss"
import classNames from "classnames/bind";


const cx = classNames.bind(styles)
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('content-header')}>
                    <Header />
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('sidebar-wrapper')}>
                    <Sidebar />
                </div>
                <div className={cx("content")}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout;
