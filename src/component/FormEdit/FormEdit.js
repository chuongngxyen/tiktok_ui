import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import { Wrapper } from "~/component/Popper";
import styles from "./FormEdit.module.scss"
import Button from "../Button";
import images from "~/assets/images";
import { EditAvatarIcon } from "../Icon";
import { memo, useState } from "react";

const cx = classNames.bind(styles)
const nameProfile = 'Chuong Nguyen'
function FormEdit({ onClose }) {
    const [textbio, settextbio] = useState('')
    const [name, setName] = useState(nameProfile)
    const handleNameUser = (e) => {
        setName(e.target.value)
    }
    const handleTextBio = (e) => {
        settextbio(e.target.value)
    }
    return <div className={cx('wrapper-formedit')}>
        <div className={cx('background-form')}>
            <div className={cx('wrapper-form')}>
                <Wrapper className={cx('form-edit')}>
                    <div className={cx('header')}>
                        <div className={cx('item-header')}>
                            <span className={cx('')}>Edit Profile</span>
                            <span className={cx('close-btn')} onClick={onClose}><FontAwesomeIcon icon={faClose} /></span>
                        </div>

                    </div>

                    <div className={cx('content')}>

                        <div className={cx('profile-photo', 'item-content')}>
                            <div className={cx('title-photo', 'title')}>Profile photo</div>
                            <div className={cx('wrapper-avatar')}>
                                <div className={cx('avatar')}>
                                    <img src={images.avatar} alt={'avatar'} />
                                </div>
                                <div className={cx('edit-icon')}><EditAvatarIcon /></div>
                            </div>
                        </div>

                        <div className={cx('item-content')}>
                            <div className={cx('title-username', 'title')}>Profile photo</div>
                            <div className={cx('username-change')}>
                                <span className={cx('username')}>chuongngxyen</span>
                                <div className={cx('des-username')}>
                                    <span>www.tiktok.com/@chuongg_ng</span>
                                    <span>Your username can be changed once every 30 days. You can change it again after Mar 6, 2023.</span>
                                </div>
                            </div>
                        </div>

                        <div className={cx('item-content')}>
                            <div className={cx('title-name', 'title')}>Name</div>
                            <div className={cx('name-change')}>
                                <input className={cx('input-name')} placeholder="Name" type={'text'} value={name} onChange={(e) => { handleNameUser(e) }} />
                                <span>Your nickname can only be changed once every 7 days.</span>
                            </div>
                        </div>

                        <div className={cx('item-content', 'bio')}>
                            <div className={cx('title-bio', 'title')}>Bio</div>
                            <div className={cx('bio-change', textbio.length < 80 ? ('') : ('bio-warning'))}>
                                <textarea placeholder="Bio" value={textbio} onChange={(e) => { handleTextBio(e) }} />
                                <span>
                                    <span style={textbio.length < 80 ? ({ color: 'rgba(22, 24, 35, 0.75)' }) : ({ color: 'rgb(255, 76, 58)' })}>{textbio.length}</span>
                                    <span>/80</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={cx('option-btns')}>
                        <Button className={cx('cancel-btn')} onClick={onClose}>Cancel</Button>
                        <Button primary className={cx('save-btn')}>Save</Button>
                    </div>
                </Wrapper>
            </div>
        </div>
    </div>;
}

export default memo(FormEdit);