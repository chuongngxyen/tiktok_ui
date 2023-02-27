import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import classNames from "classnames/bind";
import styled from "../IDLogin.module.scss"



const cx = classNames.bind(styled)
function EmailLogin() {
    const [hidePass, setHidepass] = useState(false)
    const inputpassRef = useRef(null)
    return <>
        <div className={cx('form-login')}>
            <input type="text" placeholder="Email hoặc TikTok ID" />
            <input type="password" placeholder="Mật khẩu" ref={inputpassRef} />
            <FontAwesomeIcon icon={hidePass ? (faEyeSlash) : (faEye)} className={cx('eye-icon')} onClick={() => {
                setHidepass(!hidePass)
                if (hidePass) {
                    inputpassRef.current.type = 'text'
                }
                else {
                    inputpassRef.current.type = 'password'

                }
            }} />
        </div>
        <div className={cx("forgot-pass")}>
            <span>Quên mật khẩu</span>
        </div>
    </>;
}

export default EmailLogin;