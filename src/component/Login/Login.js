import { faChevronLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { forwardRef, useCallback, useEffect, useState } from "react";

import { Wrapper } from "../Popper";
import ItemLogin from "./ItemLogin";
import styled from "./Login.module.scss"


const cx = classNames.bind(styled)
function Login({ onClose, open }, ref) {
    const [ContentLogin, setContent] = useState(() => ItemLogin)
    const [backBtn, setbackBtn] = useState(false)

    const handleChooseLogin = useCallback((item) => {
        if (item.type) {
            setContent(() => item.type)
            setbackBtn(true)
        }
        else {
            // setContent(() => ItemLogin)
            // setbackBtn(false)
        }
    }, [])
    const handleBacktoLoginDefault = () => {
        setContent(() => ItemLogin)
        setbackBtn(false)
    }
    useEffect(() => {
        if (!open) {
            const resetLogin = setTimeout(() => {
                setContent(() => ItemLogin)
                setbackBtn(false)
            }, 500);
            return () => {
                clearTimeout(resetLogin)
            }
        }
    }, [open]);
    return <div className={cx('wrapper')} ref={ref} style={{ display: 'none' }}>
        <div className={cx('content')}>
            <div className={cx('form-login')}>
                <Wrapper className={cx('wrapper-item')}>
                    {backBtn && <div className={cx('back-btn')} onClick={handleBacktoLoginDefault}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>}
                    <div className={cx('close-btn')} onClick={onClose}>
                        <FontAwesomeIcon icon={faClose} />
                    </div>
                    <div className={cx('content-login')}>
                        <ContentLogin onHandleClick={handleChooseLogin} />

                    </div>
                    <div className={cx('text-register')}>
                        <span className={cx('register')}>Bạn không có tài khoản? <span>Đăng ký</span></span>
                    </div>
                </Wrapper>
            </div>
        </div>
    </div>;
}

export default forwardRef(Login);