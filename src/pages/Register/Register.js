import axios from "axios";
import classNames from "classnames/bind";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "~/component/Button";
import styles from "./Register.module.scss"


const cx = classNames.bind(styles)
function Register() {
    const navigation = useNavigate()
    const [item, setItem] = useState({
        username: "",
        nickname: "",
        password: "",
        ngaysinh: "",
        gmail: "",
        bio: "",
        avatar: ""
    })
    const [password2, setPassword2] = useState('')
    const handleRegister = async () => {
        const info = Object.values(item)
        for (var i in info) {
            if (!info[i]) {
                alert('Enter all input')
                return
            }
        }
        if (password2 !== item.password) {
            alert('Pass dont match')
            return
        }
        if (!isValidemail(item.gmail)) {
            alert('Gmail invalid')
            return
        }
        const result = await axios.post('http://localhost:3001/api/register', item)
        console.log(result);
        if (result.data === 'username co roi') {
            alert('username has been used')
            return
        }
        else {
            alert('them thanh cong')
            navigation('/login')
        }

    }
    const isValidemail = (value) => {
        return /\S+@\S+\.\S+/.test(value);
    }
    return <div className={cx('wrapper')}>
        <div className={cx('register-form')}>
            <div className={cx('form')}>
                <span>Register</span>
                <div className={cx('content')}>
                    <div className={cx('left-content')}>
                        <div className={cx('username', 'input-wrapper')}>
                            <span>Username</span>
                            <input type="text" onChange={
                                (e) => {
                                    setItem({ ...item, username: e.target.value })
                                }
                            } spellCheck={false} />
                        </div>
                        <div className={cx('nickname', 'input-wrapper')}>
                            <span>Nickname</span>
                            <input type="text" onChange={
                                (e) => {
                                    setItem({ ...item, nickname: e.target.value })
                                }
                            } spellCheck={false} />
                        </div>
                        <div className={cx('password', 'input-wrapper')}>
                            <span>Password</span>
                            <input type="password" onChange={
                                (e) => {
                                    setItem({ ...item, password: e.target.value })
                                }
                            } spellCheck={false} />
                            <input type="password" value={password2} onChange={(e) => { setPassword2(e.target.value) }} spellCheck={false} placeholder="enter again" />
                        </div>
                    </div>
                    <div className={cx('right-content')}>
                        <div className={cx('date-of-birth', 'input-wrapper')}>
                            <span>Date of birth</span>
                            <input type="date" onChange={
                                (e) => {
                                    setItem({ ...item, ngaysinh: e.target.value })
                                }
                            } spellCheck={false} />
                        </div>
                        <div className={cx('gmail', 'input-wrapper')}>
                            <span>Gmail</span>
                            <input type="email" onChange={
                                (e) => {
                                    if (isValidemail(e.target.value)) {
                                        console.log(e.target.value);
                                        setItem({ ...item, gmail: e.target.value })
                                    }
                                }
                            } spellCheck={false} />
                        </div>
                        <div className={cx('bio', 'input-wrapper')}>
                            <span>Bio</span>
                            <textarea cols="30" onChange={
                                (e) => {
                                    setItem({ ...item, bio: e.target.value })
                                }
                            } rows="3" maxLength={80} spellCheck={false}></textarea>
                        </div>
                        <div className={cx('avatar')}>
                            <input type='file' onChange={
                                (e) => {
                                    setItem({ ...item, avatar: e.target.files[0].name })
                                }
                            } />
                        </div>
                    </div>
                </div>
                <Button primary className={cx('reg-btn')} onClick={handleRegister}>Register</Button>
                <Button primary className={cx('reg-btn')} onClick={() => {
                    navigation('/login')
                }}>Go to Login</Button>
            </div>
        </div>
    </div>;
}

export default Register;