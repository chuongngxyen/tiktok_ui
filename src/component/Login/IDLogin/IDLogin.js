import classNames from "classnames/bind";
import styled from "./IDLogin.module.scss"
import Button from "~/component/Button";
import EmailLogin from "./EmailLogin";
import { useState } from "react";
import PhoneLogin from "./PhoneLogin";

const cx = classNames.bind(styled)

function IDLogin() {
    const [typeLogin, setTypelogin] = useState(false)
    const handleChangeTypeLogin = () => {
        setTypelogin(!typeLogin)
    }
    return <>
        <div className={cx('header')}>
            <h1>Đăng nhập</h1>
        </div>
        <div className={cx('content')}>
            <div className={cx('style-login')}>
                <span className={cx('font-1')}>
                    {typeLogin ? ("Email hoặc TikTok ID") : ("Điện thoại")}
                </span>
                <span className={cx('font-2')} onClick={handleChangeTypeLogin}>
                    {typeLogin ? ("Đăng nhập bằng email hoặc TikTok ID") : (" Đăng nhập bằng số điện thoại")}
                </span>
            </div>
            <div>
                {typeLogin ? (<EmailLogin />) : (<PhoneLogin />)}
            </div>
        </div>
        <Button primary className={cx('login-btn')}>Đăng nhập</Button>
    </>;
}

export default IDLogin;