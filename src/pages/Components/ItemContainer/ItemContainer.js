import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";


import { videos } from "~/assets/video";
import Button from "~/component/Button";
import { CommentIcon, LoveAnimationIcon, LoveIcon, MusicIcon, MuteIcon, PauseIcon, PlayIcon, ShareIcon, SoundIcon } from "~/component/Icon";
import styles from "./ItemContainer.module.scss"
import ShareItem from "~/component/ShareItem/ShareItem";
const cx = classNames.bind(styles)

// const strings = "Hãy cứ vô tư và lạc lạc lạc lạc lạc.... #haycuvotu #xuhuong #xuhuongtitok #nhachay #nhachaymoingay";
function ItemContainer({ soundvalue = 50, srcvideo = videos.test, videoItem }) {
    const [like, setLike] = useState(false)
    const [animationLove, setAnimationLove] = useState(false)
    const [playvideo, setPlayvideo] = useState(false)
    const [soundvideo, setsoundvideo] = useState(soundvalue)
    const loveBtn = useRef(null)
    const refVideo = useRef(null)
    const navigate = useNavigate()

    // const handleDesciptionHash = (string) => {
    //     var temps = string.split(" ")
    //     const findhash = temps.map((temp) => {
    //         if (temp.includes('#')) {
    //             return temp
    //         }
    //         else {
    //             return '@'
    //         }
    //     }).filter(current => current !== '@')
    //     return findhash
    // }
    const handleLikeVideo = () => {
        setLike(!like)
        if (!like) {
            setTimeout(() => setAnimationLove(false), 300)
            setAnimationLove(true)
        }
    }

    const handleplayvideo = () => {
        setPlayvideo(!playvideo)
    }
    const handleSoundVideo = (e) => {
        setsoundvideo(e.target.value)
    }

    const handleChangetoCommentVideo = () => {
        navigate(`/@${videoItem.user.nickname}/video/${videoItem.id}`, { state: { videoItem } })
    }
    useEffect(() => {
        if (playvideo) {
            refVideo.current.play()
        }
        else {
            refVideo.current.pause()
        }

    }, [playvideo]);

    useEffect(() => {
        refVideo.current.volume = soundvideo / 100

    }, [soundvideo])


    useEffect(() => {

    }, [])


    return (
        <div className={cx('wrapper')}>
            <div className={cx('des-wrapper')} >
                <Link to="/" className={cx('image-wrapper')}><img className={cx('image')} src={videoItem.user.avatar} alt="error" /></Link>
                <div className={cx('content')}>
                    <div className={cx('des-content')}>
                        <div className={cx('owner-content')}>
                            <Link to="/" className={cx('name')}>
                                {videoItem.user.first_name} {videoItem.user.last_name}
                                {videoItem.user.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />}
                            </Link>
                            <Link to="/" className={cx('nickname')}>{videoItem.user.nickname}</Link>
                        </div>
                        <div className={cx('description')}>
                            {/* description
                            <span>{strings.slice(0, strings.search('#'))}</span>
                             //hashtag 
                            {handleDesciptionHash(strings).map((des, index) => {
                                return <span key={index} className={cx('hashtag-des')}>{des} </span>
                            })} */}
                            {videoItem.description}
                        </div>
                        <div className={cx('wrapper-music')}>
                            <Button showmusic lefticon={<MusicIcon />}>{videoItem.music ? (videoItem.music) : ('No music')}</Button>
                        </div>
                    </div>

                    <Button outline className={cx('follow-btn')}>Follow</Button>
                </div>
            </div>

            <div className={cx('video-wrapper')}>
                <div className={cx('video-content')}>
                    {/* video */}
                    <video webkitsupportsfullscreen={'false'} loop ref={refVideo} volumne={'true'} src={videoItem.file_url} className={cx('video')} onDoubleClick={(e) => {
                        setLike(true)
                    }}></video>

                    <div>
                        <div className={cx('play-video')} onClick={handleplayvideo}>{playvideo ? (<PauseIcon />) : (<PlayIcon />)}</div>
                        <div className={cx('sound-wrapper')}>
                            <input type={"range"} value={soundvideo} min={0} max={100} className={cx('sound-control')} onChange={(e) => { handleSoundVideo(e) }} />
                            <div className={cx('mute-video')} onClick={() => {
                                if (soundvideo === 0) {
                                    setsoundvideo(Math.random() * (100 - 10) + 10)
                                }
                                else {
                                    setsoundvideo(0)
                                }
                            }}>{soundvideo > 0 ? (<SoundIcon />) : (<MuteIcon />)}</div>
                        </div>
                    </div>
                </div>
                <div className={cx('reaction-content')}>
                    <div className={cx('reaction')}>
                        <Button ref={loveBtn} className={cx('love-btn', like ? ('love-color-like') : ('love-color-unlike'))} onClick={handleLikeVideo}>{animationLove ? (<LoveAnimationIcon />) : (<LoveIcon />)}</Button>
                        <strong className={cx('number')}>{videoItem.likes_count}</strong>
                    </div>

                    <div className={cx('reaction')}>
                        <Button className={cx('comment-btn')} onClick={handleChangetoCommentVideo}><CommentIcon /></Button>
                        <strong className={cx('number')}>{videoItem.comments_count}</strong>
                    </div>


                    <ShareItem>
                        <div className={cx('reaction')}>
                            <Button className={cx('share-btn')}><ShareIcon /></Button>
                            <strong className={cx('number')}>{videoItem.shares_count}</strong>
                        </div>
                    </ShareItem>

                </div>
            </div>

        </div>);
}

export default ItemContainer;