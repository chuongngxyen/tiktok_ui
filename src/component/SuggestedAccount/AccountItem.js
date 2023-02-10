//import PropTypes from "prop-types"
import classNames from "classnames/bind"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import Tippy from "@tippyjs/react/headless"
import { Link } from "react-router-dom"
import { useContext } from "react"

import { infoContext } from "~/layouts/components/Sidebar/Sidebar"
import styles from "./SuggestedAccount.module.scss"
import images from "~/assets/images"
import { Wrapper } from "../Popper"
import Button from "../Button"

const cx = classNames.bind(styles)

function AccountItem() {
    const info = useContext(infoContext)
    return (
        <div>
            <Tippy
                interactive
                placement="bottom-end"
                delay={[500, 500]}
                offset={[-20, 0]}
                hideOnClick={false}
                render={(attrs) => {
                    if (info) {
                        return <Wrapper className={cx('account-info')}>
                            <div className={cx('wrapper-account-info')}>
                                <div className={cx('account-avatar-wrapper')}>
                                    <Link to={`/profile`}><img className={cx('avatar-account')} src={images.avatar} alt="account" /></Link>
                                    <Button primary className={cx('follow-btn')}>Follow</Button>
                                </div>
                                <div className={cx('account-name--')}>
                                    <Link to={`/profile`}>
                                        <div className={cx("account-nickname")}>
                                            <p>chuongngxyen</p>
                                            <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                                        </div>
                                        <p className={cx('account-name')}>Chuong Ngxyen</p>
                                    </Link>
                                </div>
                                <div className={cx('like-follow')}>
                                    <span className={cx('count')}>10M</span>
                                    <span className={cx('count-title', 'follower')}>Followers</span>
                                    <span className={cx('count')}>30M</span>
                                    <span className={cx('count-title')}>Likes</span>
                                </div>
                            </div>
                        </Wrapper>
                    }
                    else {
                        return
                    }
                }}>
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} src={images.avatar} alt="account" />
                    <div className={cx('item-info')}>
                        <Link to={`/profile`} >
                            <div className={cx('nickname')}>
                                <h4 className={cx('nickname-header')}>chuongngxyen</h4>
                                <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                            </div>
                            <p className={cx('name')}>Chuong Ngxyen</p>
                        </Link>
                    </div>
                </div>
            </Tippy>
        </div >

    );
}

export default AccountItem;