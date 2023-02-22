import classNames from "classnames/bind";
import styles from "./Forgot.module.scss"


const cx = classNames.bind(styles)
function Forgot() {
    return <h1 className={cx('aaa')}>Forgot Page</h1>;
}

export default Forgot;