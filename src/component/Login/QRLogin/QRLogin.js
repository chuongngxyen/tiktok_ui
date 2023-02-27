import { faQrcode, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styled from "./QRLogin.module.scss"

const cx = classNames.bind(styled)
function QRLogin() {
    return <>
        <div className={cx('header')}>
            <h1>Đăng nhập bằng mã QR</h1>
        </div>
        <div className={cx('content')}>
            <div className={cx('qr-login')}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="error" />
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>1. Mở ứng dụng TikTok trên thiết bị di động của bạn</span>
                    <span>2. Trên Hồ sơ, nhấn vào <FontAwesomeIcon style icon={faUser} />  </span>
                    <span>3. Nhấn vào <FontAwesomeIcon icon={faQrcode} style={{ margin: "0px 2px" }} /> rồi quét mã QR để xác nhận thông tin đăng nhập của bạn</span>
                </div>
            </div>
            <div className={cx('guide')}>
                <img src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/b6d3cc69d3525571aef0.gif" alt="error" />
            </div>
        </div>
    </>;
}

export default QRLogin;