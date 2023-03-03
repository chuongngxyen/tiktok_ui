import "tippy.js/dist/tippy.css"
import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import Button from "~/component/Button";
import { CommentIcon, CopyLinkIcon, EmbedIcon, LoveIcon, MusicIcon, ShareEmailIcon, ShareFacebookIcon, ShareIcon, ShareLineIcon, ShareLinkedlnIcon, ShareMessageIcon, SharePinterestIcon, ShareRedditIcon, ShareTelegramIcon, ShareTwitterIcon, ShareWhatsAppIcon } from "~/component/Icon";
import styled from "./ShowComment.module.scss"
import ShareItem from "~/component/ShareItem";
import { useLocation } from "react-router-dom";


const cx = classNames.bind(styled)

const ShareItems = [
    {
        title: "Embed",
        icon: EmbedIcon,
    },
    {
        title: "Send to friends",
        icon: ShareMessageIcon,
    },
    {
        title: "Share to Facebook",
        icon: ShareFacebookIcon,
    },
    {
        title: "Share to WhatsApp",
        icon: ShareWhatsAppIcon,
    },
    {
        title: "Copy link",
        icon: CopyLinkIcon,
    },
    {
        title: "Share to Twitter",
        icon: ShareTwitterIcon,
    },
    {
        title: "Share to Linkedln",
        icon: ShareLinkedlnIcon,
    },
    {
        title: "Share to Reddit",
        icon: ShareRedditIcon,
    },
    {
        title: "Share to Telegram",
        icon: ShareTelegramIcon,
    },
    {
        title: "Share to Email",
        icon: ShareEmailIcon,
    },
    {
        title: "Share to Line",
        icon: ShareLineIcon,
    },
    {
        title: "Share to Pinterest",
        icon: SharePinterestIcon,
    },

]
function ShowComment({ videoItem }) {
    const location = useLocation()
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-content')}>
                <div className={cx('wrapper-top')}>
                    <div className={cx('profile')}>
                        <div className={cx('info')}>
                            <div className={cx('avatar')}>
                                <img src={videoItem.user.avatar} alt="error" />
                            </div>
                            <div className={cx('name')}>
                                <div className={cx('username')}>
                                    {videoItem.user.first_name} {videoItem.user.last_name}
                                    <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                                </div>
                                <div className={cx('nickname')}>
                                    {videoItem.user.nickname}
                                    {' · '}20hours ago
                                </div>
                            </div>
                        </div>
                        <div className={cx('follow')}>
                            <Button outline className={cx('follow-btn')}>Follow</Button>
                        </div>
                    </div>

                    <div className={cx('des-content')}>
                        <span>{videoItem.description}</span>
                        <span className={cx('music')}>
                            <MusicIcon />
                            <span> {videoItem.music ? (videoItem.music) : ('No music')}</span>
                        </span>
                    </div>
                    <div className={cx('creaction_and_share')}>
                        <div className={cx('creaction')}>
                            <div className={cx('like')}>
                                <div className={cx('like-btn', 'creaction-btn')}>
                                    <LoveIcon />
                                </div>
                                <span>{videoItem.likes_count}</span>
                            </div>
                            <div className={cx('comment')}>
                                <div className={cx('like-btn', 'creaction-btn')}>
                                    <CommentIcon width="20px" height="20px" />
                                </div>
                                <span>{videoItem.comments_count}</span>
                            </div>
                        </div>
                        <div className={cx('share')}>
                            {ShareItems?.slice(0, 5).map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Tippy placement="top" content={item.title}>
                                            <div style={{ cursor: 'pointer' }} ><item.icon /></div>
                                        </Tippy>
                                    </div>
                                )
                            })}
                            {ShareItems?.slice(2) && <ShareItem ShareItems={ShareItems?.slice(7)} showItem={7} >
                                <div style={{ cursor: 'pointer' }} ><ShareIcon /></div>
                            </ShareItem>}
                        </div>
                    </div>
                    <div className={cx('link-video')}>
                        <span>{'http://localhost:3000/'}{location.pathname}</span>
                        <button>Copy Link</button>
                    </div>
                </div>
            </div>
            <div className={cx('comment-div')}>

            </div>
        </div>
    );
}

export default ShowComment;