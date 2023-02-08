import classNames from "classnames/bind";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./HeaderFooter.module.scss"


const cx = classNames.bind(styles)
function HeaderFooter({ children }) {
    return <div className={cx('wrapper')}>

        <div className={cx('header')}>
            <div className={cx('content-header')}>
                <Header />
            </div>
        </div>

        <div className={cx('content')}>
            {children}
        </div>
        <div className={cx('footer')}>
            <Footer />
        </div>
    </div>;
}

export default HeaderFooter;