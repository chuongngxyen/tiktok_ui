import classNames from "classnames/bind";
import { useState } from "react";
import Tippy from "@tippyjs/react/headless";


import { ArrowDownIcon, CopyLinkIcon, EmbedIcon, ShareEmailIcon, ShareFacebookIcon, ShareLineIcon, ShareLinkedlnIcon, ShareMessageIcon, SharePinterestIcon, ShareRedditIcon, ShareTelegramIcon, ShareTwitterIcon, ShareWhatsAppIcon } from "../Icon";
import { Wrapper } from "../Popper";
import styles from "./ShareItem.module.scss"

const cx = classNames.bind(styles)
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
function ShareItem({ children, offset = [0, -5], placement = "top-start" }) {
    const [showMore, setShowMore] = useState(false)
    return <>
        <Tippy
            interactive
            placement={placement}
            offset={offset}
            delay={[0, 500]}
            hideOnClick={false}
            render={(attrs) => (
                <Wrapper className={cx('wrapper')}>
                    <div className={cx('items-wrapper')}>
                        {ShareItems?.slice(0, 5).map((item, index) => {

                            return <div className={cx('item-wrapper')} key={index}>
                                <div className={cx('icon-item')}><item.icon /></div>
                                <span className={cx('title-item')}>{item.title}</span>
                            </div>
                        })
                        }
                        {showMore && ShareItems?.slice(5).map((item, index) => {
                            return <div className={cx('item-wrapper')} key={index}>
                                <div className={cx('icon-item')}><item.icon /></div>
                                <span className={cx('title-item')}>{item.title}</span>
                            </div>
                        })
                        }
                        <div style={{ display: showMore ? 'none' : 'flex' }} className={cx('showmore-btn')} onClick={() => { setShowMore(true) }}><ArrowDownIcon /> </div>
                    </div>

                </Wrapper>
            )}
            onHide={() => { setShowMore(false) }}>
            {children}
        </Tippy>

        {/* <ArrowDownWhiteIcon className={cx('arrow-icon')} /> */}
    </>;
}

export default ShareItem;