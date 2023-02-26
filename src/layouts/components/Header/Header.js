import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faCoins, faCamera, faGear, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react';
import "tippy.js/dist/tippy.css"
import { Link } from "react-router-dom";
import { useCallback, useLayoutEffect, useState } from "react";
import classNames from "classnames/bind";

import Menu from "~/component/Popper/Menu";
import Button from "~/component/Button";
import styles from "./Header.module.scss"
import images from "~/assets/images";
import { CreateEffectIcon, InboxIcon, MessageIcon } from "~/component/Icon";
import Image from "~/component/Image";
import Search from "../Search/Search";
import config from '~/config'
import Login from "~/component/Login";
import { createPortal } from "react-dom";
import { useRef } from "react";
import gsap from "gsap";

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


const info = JSON.parse(sessionStorage.getItem('user-login'))

function Header() {
    const [openLogin, setOpenLogin] = useState(false)
    const loginRef = useRef(null)
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: `/@${info ? (info.username) : ('')}`
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
            href: '/',
            onClick: () => {
                sessionStorage.removeItem('user-login')
            },
            separate: true
        },
    ]
    const handleOpenLogin = useCallback(() => {
        console.log(openLogin);
        setOpenLogin(!openLogin)
    }, [openLogin])
    const handleMenuChange = (menu_item) => {
        console.log(menu_item);
    }

    useLayoutEffect(() => {
        if (openLogin) {
            document.body.style = "overflow:hidden"
            gsap.to(loginRef.current, { opacity: '1', translate: '0.5', display: 'block' })
        }
        else {
            document.body.style = ""
            gsap.to(loginRef.current, { opacity: '0', translate: '0.5', display: 'none' })
        }

    }, [openLogin]);
    return (
        <>
            <Link className={cx('wrapper-logo')} to={config.routes.home}><Image src={images.logo} className={cx('logo')} alt="TikTok" /></Link>
            <Search></Search>
            <div className={cx('action')}>
                <Button text to={config.routes.upload}><FontAwesomeIcon icon={faPlus} className={cx('plus-icon')} />Upload</Button>
                {sessionStorage.getItem('user-login') ? (
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
                        <Button className={cx('login-btn')} primary onClick={handleOpenLogin}>Log in</Button>
                        <Tippy placement="bottom" content="Create Effect">
                            <Button className={cx('create-effect-icon')} href={'https://effecthouse.tiktok.com/?lang=en&utm_content=header&utm_source=tiktok_webapp_main'} target={'_blank'} ><CreateEffectIcon /></Button>
                        </Tippy>

                    </>
                )}

                <Menu item={sessionStorage.getItem('user-login') ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {sessionStorage.getItem('user-login') ? (
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
            {createPortal(<Login onClose={handleOpenLogin} open={openLogin} ref={loginRef} />, document.body)}
        </>
    );
}

export default Header;