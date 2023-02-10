import classNames from "classnames/bind";
import Button from "~/component/Button";
import { HashTagIcon, MusicIcon } from "~/component/Icon";
import styles from "./DiscoverMenu.module.scss"

const cx = classNames.bind(styles)
const contents = [
    {
        type: 'music',
        name: 'Có em - Madihu ft. LowG',
        to: '/'
    },
    {
        type: 'hashtag',
        name: 'suthatla',
        to: '/'
    },

    {
        type: 'hashtag',
        name: 'xuhuong',
        to: '/'
    },
    {
        type: 'hashtag',
        name: '7749hieuung',
        to: '/'
    },
    {
        type: 'music',
        name: 'Đừng lo anh đợi mà - Mr.Siro',
        to: '/'
    },
    {
        type: 'music',
        name: 'Thiên thần tình yêu - RICKY STAR',
        to: '/'
    },
    {
        type: 'music',
        name: 'Nắng ấm xa dần - Sơn Tùng MTP',
        to: '/'
    },
    {
        type: 'hashtag',
        name: 'foryou',
        to: '/'
    },
]
function DiscoverMenu() {
    return <div className={cx('wrapper')}>
        <p className={cx('title')}>Discover</p>
        <div className={cx('content')}>
            {contents.map((content, index) => {
                return <Button
                    discover
                    lefticon={content.type === 'music' ? (<MusicIcon />) : (<HashTagIcon />)}
                    key={index}
                    to={content.to} >{content.name}</Button>
            })}
        </div>
    </div>;
}

export default DiscoverMenu;