import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss"
import classNames from "classnames/bind";
import images from "~/assets/images";
const cx = classNames.bind(styles)
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <img src={images.logo} className={cx('logo')} alt="TikTok" />
                <div className={cx('search')}>
                    <input type={'text'} spellCheck={false} placeholder="Search account and videos" />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('action')}></div>
            </div>
        </div>
    );
}

export default Header;