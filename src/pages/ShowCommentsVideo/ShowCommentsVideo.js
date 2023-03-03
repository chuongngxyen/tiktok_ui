import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";
import ShowComment from "./ShowComment/ShowComment";
import styled from "./ShowCommentsVideo.module.scss"
import ShowVideo from "./ShowVideo";

const cx = classNames.bind(styled)
function ShowCommentsVideo() {
    const { state } = useLocation()
    const { videoItem } = state

    return <div className={cx('wrapper')}>
        <div className={cx('left-content')}>
            <ShowVideo videoItem={videoItem} />
        </div>
        <div className={cx('right-content')}>
            <ShowComment videoItem={videoItem} />
        </div>
    </div>;
}

export default ShowCommentsVideo;