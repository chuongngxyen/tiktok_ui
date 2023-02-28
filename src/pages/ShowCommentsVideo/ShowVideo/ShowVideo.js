import { faChevronDown, faChevronUp, faClose, faFlag, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { videos } from "~/assets/video";
import { TikTokIcon } from "~/component/Icon";
import styled from "./ShowVideo.module.scss"

const cx = classNames.bind(styled)
function ShowVideo() {
    return <div className={cx('wrapper')}>
        <div className={cx('video-wrapper')}>
            <div className={cx('item-1')}>
                <div className={cx('close-btn')}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
                <div className={cx('TikTok-icon')}>
                    <TikTokIcon />
                </div>
            </div>
            <div className={cx('show-video')}>
                <video src={videos.test} alt="" />
                <div>
                    progress
                </div>
            </div>
            <div className={cx('item-2')}>
                <div>
                    <div className={cx('report-btn')}>
                        <FontAwesomeIcon icon={faFlag} />
                        <span>Report</span>
                    </div>
                </div>
                <div className={cx('up-down-btn')}>
                    <div className={cx('up-btn')}><FontAwesomeIcon icon={faChevronUp} /></div>
                    <div className={cx('down-btn')}><FontAwesomeIcon icon={faChevronDown} /></div>
                </div>
                <div className={cx('volume-btn')}>
                    <div><FontAwesomeIcon icon={faVolumeHigh} /></div>
                </div>
            </div>
            <div></div>
        </div>
    </div>;
}

export default ShowVideo;