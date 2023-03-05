import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { MoreIcon } from "~/component/Icon";
import Image from "~/component/Image";
import styled from "./CommentItem.module.scss"

const cx = classNames.bind(styled)
function Item() {
    return <div className={cx('wrapper-item')}>
        <div className={cx('item')}>
            <div className={cx('avatar')}>
                <Image alt="error" src={''} />
            </div>
            <div>
                <div className={cx('name-and-comment')}>
                    <span className={cx('name')}>
                        <p>chuong nguyen</p>
                    </span>
                    <div className={cx('comment')}>
                        <span className={cx('content-comment')}>kljjkjlkajajaja</span>
                    </div>
                </div>

                <div className={cx('date-item')}>
                    <div className={cx('date')}>2022-12-17</div>
                    <div className={cx('reply-btn')}>Reply</div>
                </div>
            </div>
        </div>
        <div className={cx('like-count')}>
            <span className={cx('like-btn')}><FontAwesomeIcon icon={faHeart} /></span>
            <span>100</span>
        </div >
        <div className={cx('more-btn')}><MoreIcon /></div>
    </div>;
}

export default Item;