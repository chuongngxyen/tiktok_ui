import { faChevronDown, faChevronUp, faClose, faFlag, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import images from "~/assets/images";
import { videos } from "~/assets/video";
import { TikTokIcon } from "~/component/Icon";
import styled from "./ShowVideo.module.scss"

const cx = classNames.bind(styled)
function ShowVideo() {
    const navigate = useNavigate()
    const [curretTimeVid, setCurretTimeVid] = useState(0)
    const [durationVid, setDurationvid] = useState(0)
    const videoRef = useRef()
    const seekbarRef = useRef()
    const seekbardiv = useRef()
    const handlePlayVideo = () => {
        if (videoRef.current.paused) {
            videoRef.current.play()
        }
        else {
            videoRef.current.pause()
        }
    }

    const handleSeekbar = (e) => {
        const temp = (e.target.currentTime / e.target.duration) * 100
        seekbarRef.current.style = `width:${temp}%`
        setCurretTimeVid(videoRef.current.currentTime)
    }

    const handleVideocurrenTime = (e) => {
        // (chieu dai seekbar/ chieu dai the div) * do dai video
        videoRef.current.currentTime = (e.nativeEvent.offsetX / seekbardiv.current.offsetWidth) * videoRef.current.duration
    }
    return <div className={cx('wrapper')} style={{ backgroundImage: `url('${images.avatar}')` }}>
        <div style={{ backdropFilter: 'blur(2rem)', backgroundColor: '#0000008f' }}>
            <div className={cx('video-wrapper')}>
                <div className={cx('item-1')}>
                    <div className={cx('close-btn')} onClick={() => { navigate(-1) }}>
                        <FontAwesomeIcon icon={faClose} />
                    </div>
                    <div className={cx('TikTok-icon')}>
                        <TikTokIcon />
                    </div>
                </div>
                <div className={cx('show-video')} >
                    <video src={videos.test} alt="" ref={videoRef} muted
                        onTimeUpdate={(e) => { handleSeekbar(e) }} onClick={handlePlayVideo}
                        onLoadedMetadata={(e) => {
                            setCurretTimeVid(e.target.currentTime)
                            setDurationvid(e.target.duration)
                        }} />
                    <div className={cx('seekbar-video')}>
                        <div className={cx('seekbar')} ref={seekbardiv} onClick={(e) => { handleVideocurrenTime(e) }}>
                            <span ref={seekbarRef}></span>
                        </div>
                        <div className={cx('progress')}>
                            {`${("0" + Math.floor(curretTimeVid / 60)).slice(-2)}:${("0" + Math.floor(curretTimeVid % 60)).slice(-2)}/${("0" + Math.floor(durationVid / 60)).slice(-2)}:${("0" + Math.floor(durationVid % 60)).slice(-2)}`}
                        </div>
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
        </div>
    </div>;
}

export default ShowVideo;