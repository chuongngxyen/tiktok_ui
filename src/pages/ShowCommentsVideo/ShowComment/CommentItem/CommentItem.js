import classNames from "classnames/bind";
import styled from "./CommentItem.module.scss"
import Item from "./Item";


const cx = classNames.bind(styled)
function CommentItem() {
    return <div className={cx('wrapper')}>
        <div className={cx('comment-item')}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />

        </div>
    </div>;
}

export default CommentItem;