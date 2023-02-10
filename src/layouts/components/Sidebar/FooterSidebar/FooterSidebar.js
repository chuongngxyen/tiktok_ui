import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./FooterSidebar.module.scss";
const cx = classNames.bind(styles)

function FooterSidebar() {

    return <div className={cx('wrapper')}>
        <div className={cx('descriptions')}>
            <div className={cx('description')}>
                <Link to="/">About </Link>
                <Link to="/">Newsroom </Link>
                <Link to="/">Contact </Link>
                <Link to="/">Careers </Link>
                <Link to="/">ByteDance</Link>
            </div>
            <div className={cx('description')}>
                <Link to="/">TikTok for Good </Link>
                <Link to="/">Advertise </Link>
                <Link to="/">Developers </Link>
                <Link to="/">Transparency </Link>
                <Link to="/">TikTok Rewards </Link>
                <Link to="/">Tiktok Browse </Link>
                <Link to="/">Tiktok Embeds</Link>
            </div>
            <div className={cx('description')}>
                <Link to="/">Help </Link>
                <Link to="/">Safety </Link>
                <Link to="/">Terms </Link>
                <Link to="/">Privacy </Link>
                <Link to="/">Creator Portal  </Link>
                <Link to="/">Community Guidelines</Link>
            </div>
        </div>
        <div className={cx('description')}>
            <span>© 2023 chuongngxyen</span>
        </div>
    </div>;
}

export default FooterSidebar;