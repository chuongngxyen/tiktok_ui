import classNames from "classnames/bind";

import { GoogleIcon, KaKaoTalkIcon, LoginIcon, QRIcon, ShareFacebookIcon, ShareLineIcon, ShareTelegramIcon, ShareTwitterIcon } from "../../Icon";
import Button from "~/component/Button";
import styled from "./ItemLogin.module.scss"
import QRLogin from "../QRLogin";
import IDLogin from "../IDLogin";

const cx = classNames.bind(styled)
const MENU_ITEMS = [
    {
        type: QRLogin,
        title: "Sử dụng mã QR",
        icon: QRIcon,
    },
    {
        type: IDLogin,
        title: "Số điện thoại / Email / TikTok ID",
        icon: LoginIcon,
    },
    {

        title: "Tiếp tục với Facebook",
        icon: ShareFacebookIcon,
    },
    {
        title: "Tiếp tục với Google",
        icon: GoogleIcon,
    },
    {
        title: "Tiếp tục với Twitter",
        icon: ShareTwitterIcon,
    },
    {
        title: "Tiếp tục với Line",
        icon: ShareLineIcon,
    },
    {
        title: "Tiếp tục với KaKaoTalk",
        icon: KaKaoTalkIcon,
    },
    {
        title: "Tiếp tục với Instagram",
        icon: ShareTelegramIcon,
    },
]
function ItemLogin({ item, onHandleClick }) {
    return <>
        <h1 className={cx('header')}>Đăng nhập vào TikTok</h1>
        <div className={cx('item')}>
            {MENU_ITEMS.map((item, index) => {
                return (
                    <Button className={cx('login-item')} loginoption
                        lefticon={<item.icon width="1em" height="1em" />} key={index} onClick={() => onHandleClick(item)}>
                        {item.title}
                    </Button>
                )
            })}
        </div>
    </>
}

export default ItemLogin;