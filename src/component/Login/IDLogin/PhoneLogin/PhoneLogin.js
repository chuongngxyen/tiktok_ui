import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "~/component/Button";
import styled from "./PhoneLogin.module.scss"


const cx = classNames.bind(styled)
function PhoneLogin() {
    return <div className={cx('wrapper')}>
        <div className={cx('form-login')}>
            <div className={cx('phone-region')}>
                <span>VN +84</span>
                <FontAwesomeIcon icon={faChevronDown} style={{ cursor: "pointer" }} />
            </div>
            <input type="text" spellCheck={false} />
        </div>
        <div className={cx('code-check')}>
            <input type="text" spellCheck={false} />
            <Button className={cx('checkcode-btn')}>Gửi mã</Button>
        </div>
        <span className={cx('login-with-password')}>Đăng nhập với Mật khẩu</span>
    </div>;
}

export default PhoneLogin;