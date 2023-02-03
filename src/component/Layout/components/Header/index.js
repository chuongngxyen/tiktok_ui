import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless';
import classNames from "classnames/bind";

import Menu from "~/component/Popper/Menu";
import Button from "~/component/Button";
import { Wrapper as PopperWrapper } from "~/component/Popper";
import styles from "./Header.module.scss"
import images from "~/assets/images";
import { AccountItem } from "~/component/AccountItem";


const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: [
            {
                code: 'vn',
                type: 'language',
                title: 'Tiếng Việt'
            },
            {
                code: 'en',
                type: 'language',
                title: 'English',
            },

        ]
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    },
]
function Header() {
    const [searchResult, setsearchResult] = useState([]);

    const handleMenuChange = (menu_item) => {
        console.log(menu_item);
    }
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
                    <Menu
                        item={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </div >
    );
}

export default Header;