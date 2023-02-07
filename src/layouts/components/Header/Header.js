import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faCoins, faCamera, faGear, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react';
import "tippy.js/dist/tippy.css"
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import Menu from "~/component/Popper/Menu";
import Button from "~/component/Button";
import styles from "./Header.module.scss"
import images from "~/assets/images";
import { CreateEffectIcon, InboxIcon, MessageIcon } from "~/component/Icon";
import Image from "~/component/Image";
import Search from "../Search/Search";
import config from '~/config'

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
    const currenUser = false

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@chuong'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faCamera} />,
            title: 'LIVE Studio',
            to: '/livestudio'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        },
    ]
    const handleMenuChange = (menu_item) => {
        console.log(menu_item);
    }


    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Link to={config.routes.home}><Image src={images.logo} className={cx('logo')} alt="TikTok" /></Link>
                <Search></Search>
                <div className={cx('action')}>
                    <Button text to={config.routes.upload}><FontAwesomeIcon icon={faPlus} className={cx('plus-icon')} />Upload</Button>
                    {currenUser ? (
                        <>
                            <Tippy placement="bottom" content="Messages" >
                                <button className={cx('user-message')}><MessageIcon /></button>
                            </Tippy>
                            <Tippy placement="bottom" content="Inbox">
                                <button className={cx('user-inbox')}><InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                            <Tippy placement="bottom" content="Create Effect">
                                <Button className={cx('create-effect-icon')} href={'https://effecthouse.tiktok.com/?lang=en&utm_content=header&utm_source=tiktok_webapp_main'} target={'_blank'}><CreateEffectIcon /></Button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                            <Tippy placement="bottom" content="Create Effect">
                                <Button className={cx('create-effect-icon')} href={'https://effecthouse.tiktok.com/?lang=en&utm_content=header&utm_source=tiktok_webapp_main'} target={'_blank'} ><CreateEffectIcon /></Button>
                            </Tippy>

                        </>
                    )}

                    <Menu
                        item={currenUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currenUser ? (
                            <Image
                                src={images.avatar}
                                className={cx('user-avatar')}
                                alt="Chuong Nguyen"
                                fallback={images.noImage} />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}

                    </Menu>
                </div>
            </div>
        </div >
    );
}

export default Header;