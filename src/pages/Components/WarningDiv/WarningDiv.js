import classNames from "classnames/bind";
import styles from "./WarningDiv.module.scss"

const cx = classNames.bind(styles)

function WarningDiv({ children, className }) {
    return <div className={cx('warpper')}>
        <div className={cx('warning')}>
            <div className={cx('warning-item', { [className]: className })}>
                {children}
            </div>
        </div>
    </div>;
}

export default WarningDiv;