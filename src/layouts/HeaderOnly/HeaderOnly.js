import Header from "../components/Header";
import classNames from "classnames/bind";
import styles from "./HeaderOnly.module.scss";

const cx = classNames.bind(styles)

function HeaderOnly({ children }) {
    return (
        <div>
            <div className={cx('header')}>
                <div className={cx('content-header')}>
                    <Header />
                </div>
            </div>

            <div className={cx('content')}>
                {children}
            </div>
        </div>
    );
}

export default HeaderOnly;