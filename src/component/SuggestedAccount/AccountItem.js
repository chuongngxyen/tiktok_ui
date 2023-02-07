//import PropTypes from "prop-types"
import classNames from "classnames/bind"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import styles from "./SuggestedAccount.module.scss"
import images from "~/assets/images"

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img className={cx('avatar')} src={images.avatar} alt="account" />
            <div className={cx('item-info')}>
                <div className={cx('nickname')}>
                    <h4>chuongngxyen</h4>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                </div>

                <p className={cx('name')}>Chuong Ngxyen</p>

            </div>
        </div>
    );
}

export default AccountItem;