import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless';
import classNames from "classnames/bind";

import Button from "~/component/Button";
import { Wrapper as PopperWrapper } from "~/component/Popper";
import styles from "./Header.module.scss"
import images from "~/assets/images";
import { AccountItem } from "~/component/AccountItem";
const cx = classNames.bind(styles)
function Header() {
    const [searchResult, setsearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setsearchResult([])
        }, 0);
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <img src={images.logo} className={cx('logo')} alt="TikTok" />
                <Tippy interactive
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs} >
                            <PopperWrapper>
                                <h4 className={cx('account-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}>
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
                </Tippy>
                <div className={cx('action')}>
                    <Button text><FontAwesomeIcon icon={faPlus} className={cx('plus-icon')} />Upload</Button>

                    <Button primary>Log in</Button>
                </div>
            </div>
        </div>
    );
}

export default Header;