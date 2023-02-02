import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/71b64df053e4d8a0c61852fb43ffee5d~c5_300x300.webp?x-expires=1675494000&x-signature=Xv6g82NjYUeL%2FaehO6uXBOhGJIg%3D" alt="avatar" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>ChuongNgxyen</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                </h4>
                <p className={cx('username')}>
                    ChuongNguyen
                </p>
            </div>
        </div>
    );
}

export default AccountItem;