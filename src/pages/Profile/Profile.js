import classNames from "classnames/bind";
import { useState } from "react";
import images from "~/assets/images";
import Button from "~/component/Button";
import { BlockIcon, EditIcon, StyledShareIcon } from "~/component/Icon";
import styles from "./Profile.module.scss"

const cx = classNames.bind(styles)
function Profile() {
    const [underline, setUnderline] = useState(false)
    const [chosen, setchosen] = useState(false)

    const handleClickVideobtn = () => {
        setUnderline(false)
        setchosen(false)
    }
    const handleClickLikedbtn = () => {
        setUnderline(true)
        setchosen(true)
    }
    const handleMouseEnterVideo = () => {
        setUnderline(false)
    }

    const handleMouseEnterLiked = () => {
        setUnderline(true)
    }

    const handleCheckChosen = () => {
        if (chosen) {
            setUnderline(true)
        }
        else {
            setUnderline(false)
        }
    }
    return (<div className={cx('wrapper')}>
        <div className={cx('header-profile')}>
            <div className={cx('info-profile')}>
                <div className={cx('avatar-name')}>
                    <div className={cx('avatar-wrapper')}>
                        <img className={cx('avatar')} src={images.avatar} alt="avatar" />
                    </div>
                    <div className={cx('name-and-btn')}>
                        <div className={cx('name-nickname')}>
                            <div className={cx('name')}>Chuong Nguyen</div>
                            <div className={cx('nickname')}>chuongngxyen</div>
                        </div>
                        <Button className={cx('edit-btn')} lefticon={<EditIcon />} text>Edit Profile</Button>
                    </div>
                </div>
                <div className={cx('count-info')}>
                    <span className={cx('count')}>10M</span>
                    <span className={cx('info')}>Following</span>
                    <span className={cx('count')}>8M</span>
                    <span className={cx('info')}>Followers</span>
                    <span className={cx('count')}>1B</span>
                    <span className={cx('info')}>Likes</span>
                </div>
                <div className={cx('bio-text')}>
                    <span>asdsadasdasd</span>
                </div>
            </div>
            <div className={cx('share-icon')}><StyledShareIcon /></div>
        </div>
        <div className={cx('video-info')}>
            <Button className={cx('video-btn', chosen && 'color-unchosen')} onMouseLeave={handleCheckChosen} onMouseEnter={handleMouseEnterVideo} onClick={handleClickVideobtn}>Videos</Button>
            <Button lefticon={<BlockIcon />} className={cx('video-btn', !chosen && 'color-unchosen')} onMouseLeave={handleCheckChosen} onMouseEnter={handleMouseEnterLiked} onClick={handleClickLikedbtn}>Liked</Button>
            <div className={cx('focus-effect', underline && 'underline')}>

            </div>
        </div>
    </div>);
}

export default Profile;