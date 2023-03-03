import { faChevronDown, faChevronUp, faClose, faFlag, faPlay, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import images from "~/assets/images";
import { TikTokIcon } from "~/component/Icon";
import styled from "./ShowVideo.module.scss"

const cx = classNames.bind(styled)
function ShowVideo({ videoItem }) {
    const navigate = useNavigate()
    const [curretTimeVid, setCurretTimeVid] = useState(0)
    const [durationVid, setDurationvid] = useState(0)
    const videoRef = useRef()
    const seekbarRef = useRef()
    const seekbardiv = useRef()
    const controlSeekbar = useRef()
    const playIconRef = useRef()
    const handlePlayVideo = () => {
        if (videoRef.current.paused) {
            videoRef.current.play()
            playIconRef.current.style = "display:none"
        }
        else {
            videoRef.current.pause()
            playIconRef.current.style = "display:block"
        }
    }

    const handleSeekbar = (e) => {
        const temp = (e.target.currentTime / e.target.duration) * 100
        seekbarRef.current.style = `width:${temp}%`
        controlSeekbar.current.style = `left:${temp - 0.2}%`
        setCurretTimeVid(videoRef.current.currentTime)
    }

    const handleVideocurrenTime = (e) => {
        // (chieu dai seekbar/ chieu dai the div) * do dai video
        let rect = e.currentTarget.getBoundingClientRect(),
            offsetX = e.clientX - rect.left;
        let currentTime = (offsetX / seekbardiv.current.clientWidth) * videoRef.current.duration
        videoRef.current.currentTime = currentTime
    }

    const handleDraggable = (e) => {
        // e.nativeEvent.offsetX 
        let rect = e.currentTarget.getBoundingClientRect(),
            offsetX = e.clientX - rect.left;
        seekbarRef.current.style = `width:${offsetX}px`
        controlSeekbar.current.style = `left:${offsetX - 1}px`
        // console.log(seekbarRef.current.style);
        let currentTime = (offsetX / seekbardiv.current.clientWidth) * videoRef.current.duration

        videoRef.current.currentTime = currentTime
    }

    return <div className={cx('wrapper')} style={{ backgroundImage: `url('${videoItem.thumb_url}')` }}
        onMouseUp={() => {
            seekbarRef.current.removeEventListener('mousemove', handleDraggable)
            console.log(seekbardiv);
        }}
    >
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
                    <video src={videoItem.file_url} alt="" ref={videoRef} muted
                        onTimeUpdate={(e) => { handleSeekbar(e) }}
                        onClick={handlePlayVideo}
                        onLoadedMetadata={(e) => {
                            setCurretTimeVid(e.target.currentTime)
                            setDurationvid(e.target.duration)
                        }} />
                    <div className={cx('seekbar-video')}>
                        <div id="seekbar" className={cx('seekbar')} ref={seekbardiv}
                            onMouseDown={() => {
                                seekbardiv.current.addEventListener("mousemove", handleDraggable)
                            }}

                            onClick={(e) => { handleVideocurrenTime(e) }}>
                            <span ref={seekbarRef}></span>
                            <span className={cx('control-seekbar')} ref={controlSeekbar}></span>
                        </div>
                        <div className={cx('progress')}>
                            {`${("0" + Math.floor(curretTimeVid / 60)).slice(-2)}:${("0" + Math.floor(curretTimeVid % 60)).slice(-2)}/${("0" + Math.floor(durationVid / 60)).slice(-2)}:${("0" + Math.floor(durationVid % 60)).slice(-2)}`}
                        </div>
                    </div>
                    <div className={cx('play-icon')} ref={playIconRef} onClick={handlePlayVideo}>
                        <FontAwesomeIcon icon={faPlay} />
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
            </div>
        </div>
    </div>;
}

export default ShowVideo;