import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import images from "~/assets/images";
import { videos } from "~/assets/video";
import Button from "~/component/Button";
import { useRef, useState } from "react";

import { CommentIcon, LoveAnimationIcon, LoveIcon, MusicIcon, ShareIcon } from "~/component/Icon";
import styles from "./ItemContainer.module.scss"

const cx = classNames.bind(styles)

const strings = "Hãy cứ vô tư và lạc lạc lạc lạc lạc.... #haycuvotu #xuhuong #xuhuongtitok #nhachay #nhachaymoingay";
function ItemContainer() {
    const [like, setLike] = useState(false)
    const [animationLove, setAnimationLove] = useState(false)
    const loveBtn = useRef()
    const refVideo = useRef()


    const handleDesciptionHash = (string) => {
        var temps = string.split(" ")
        const findhash = temps.map((temp) => {
            if (temp.includes('#')) {
                return temp
            }
            else {
                return '@'
            }
        }).filter(current => current !== '@')
        return findhash
    }
    const handleLikeVideo = () => {
        setLike(!like)
        if (!like) {
            setTimeout(() => setAnimationLove(false), 300)
            setAnimationLove(true)
        }
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-2')} >
                <Link to="/" className={cx('image-wrapper')}><img className={cx('image')} src={images.avatar} alt="error" /></Link>
                <div className={cx('content')}>
                    <div className={cx('des-content')}>
                        <div className={cx('owner-content')}>
                            <Link to="/" className={cx('name')}>Chuong Nguyen <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} /></Link>
                            <Link to="/" className={cx('nickname')}>chuongngxuyen</Link>
                        </div>
                        <div className={cx('description')}>
                            {/* description */}
                            <span>{strings.slice(0, strings.search('#'))}</span>
                            {/* hashtag */}
                            {handleDesciptionHash(strings).map((des, index) => {
                                return <span key={index} className={cx('hashtag-des')}>{des} </span>
                            })}
                        </div>
                        <div className={cx('wrapper-music')}>
                            <Button showmusic lefticon={<MusicIcon />}>BING CHILLING</Button>
                        </div>
                    </div>

                    <Button outline className={cx('follow-btn')}>Follow</Button>
                </div>
            </div>

            <div className={cx('video-wrapper')}>
                <div className={cx('video-content')}>
                    <video ref={refVideo} src={videos.test} className={cx('video')} onDoubleClick={(e) => {
                        setLike(true)
                    }}></video>
                </div>
                <div className={cx('reaction-content')}>
                    <div className={cx('reaction')}>
                        <Button ref={loveBtn} className={cx('love-btn', like ? ('love-color-like') : ('love-color-unlike'))} onClick={handleLikeVideo}>{animationLove ? (<LoveAnimationIcon />) : (<LoveIcon />)}</Button>
                        <strong className={cx('number')}>80K</strong>
                    </div>

                    <div className={cx('reaction')}>
                        <Button className={cx('comment-btn')}><CommentIcon /></Button>
                        <strong className={cx('number')}>10K</strong>
                    </div>
                    <div className={cx('reaction')}>
                        <Button className={cx('share-btn')}><ShareIcon /></Button>
                        <strong className={cx('number')}>2000</strong>
                    </div>

                </div>
            </div>

        </div>);
}

export default ItemContainer;