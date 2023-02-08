import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import images from "~/assets/images";
import Image from "~/component/Image";
import styles from "./Footer.module.scss"


const cx = classNames.bind(styles
)
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <Image src={images.logoFooter}></Image>
                <Image src={images.logoTextFooter}></Image>

            </div>
            <div className={cx('content-header')}>

                <div className={cx('header')}>
                    <span className={cx('header-text')}>Company</span>
                    <Link to={`/`} className={cx('text')}>About</Link>
                    <Link to={`/`} className={cx('text')}>Contact</Link>
                    <Link to={`/`} className={cx('text')}>Newsroom</Link>
                    <Link to={`/`} className={cx('text')}>Careers</Link>
                    <Link to={`/`} className={cx('text')}>ByteDance</Link>
                </div>
                <div className={cx('header')}>
                    <span to={`/`} className={cx('header-text')}>Programs</span>
                    <Link to={`/`} className={cx('text')}>TikTok for Good</Link>
                    <Link to={`/`} className={cx('text')}>Advertise</Link>
                    <Link to={`/`} className={cx('text')}>Developers</Link>
                    <Link to={`/`} className={cx('text')}>TikTok Rewards</Link>
                    <Link to={`/`} className={cx('text')}>TikTok Browse</Link>
                    <Link to={`/`} className={cx('text')}>TikTok Embeds</Link>

                </div>
                <div className={cx('header')}>
                    <span to={`/`} className={cx('header-text')}>Support</span>
                    <Link to={`/`} className={cx('text')}>Help Center</Link>
                    <Link to={`/`} className={cx('text')}>Safety Center</Link>
                    <Link to={`/`} className={cx('text')}>Creator Portal</Link>
                    <Link to={`/`} className={cx('text')}>Commnunity Guidelines</Link>
                    <Link to={`/`} className={cx('text')}>TransParency</Link>
                    <Link to={`/`} className={cx('text')}>Accessbility</Link>
                </div>

                <div className={cx('header')}>
                    <span to={`/`} className={cx('header-text')}>Legal</span>
                    <Link to={`/`} className={cx('text')}>Terms of Use</Link>
                    <Link to={`/`} className={cx('text')}>Privacy Policy</Link>
                </div>

            </div>
            <div className={cx('content-footer')}></div>
        </div>)
}

export default Footer;