import classNames from "classnames/bind";
import ShowComment from "./ShowComment/ShowComment";
import styled from "./ShowCommentsVideo.module.scss"
import ShowVideo from "./ShowVideo";

const cx = classNames.bind(styled)
function ShowCommentsVideo() {
    return <div className={cx('wrapper')}>
        <div className={cx('left-content')}>
            <ShowVideo />
        </div>
        <div className={cx('right-content')}>
            <ShowComment />
        </div>
    </div>;
}

export default ShowCommentsVideo;