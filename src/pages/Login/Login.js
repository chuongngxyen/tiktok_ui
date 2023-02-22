import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Button from "~/component/Button";
import styles from "./Login.module.scss"

const cx = classNames.bind(styles)

function Login() {
    const [hidepass, sethidepass] = useState(false)
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const checkboxRef = useRef()
    const inputpassRef = useRef()


    const handleLogin = async () => {
        const item = { username, password }
        let result = await axios.post('http://localhost:3001/api/login', item)
        result = await result.json()
        console.log(result);
        localStorage.setItem('user-login', result)
    }
    // fetch('http://localhost:3001/home')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    return <div className={cx('login-form')}>
        <div className={cx('wrapper')}>
            <div className={cx('login-form-inside')}>
                <span className={cx('header')}>Login</span>
                <div>
                    <div className={cx('username', 'input')}>
                        <span>Username</span>
                        <input type="text" value={username} onChange={(e) => {
                            setUsername(e.target.value)
                        }} />
                    </div>
                    <div className={cx('password', 'input')}>
                        <label>Password</label>
                        <input ref={inputpassRef} type="password" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                        <FontAwesomeIcon icon={hidepass ? (faEyeSlash) : (faEye)} className={cx('eye-icon')} onClick={() => {
                            sethidepass(!hidepass)
                            if (hidepass) {
                                inputpassRef.current.type = 'text'
                            }
                            else {
                                inputpassRef.current.type = 'password'

                            }
                        }} />
                    </div>
                </div>
                <div className={cx('remember-me')}>
                    <span onClick={() => {
                        console.log(checkboxRef);
                        checkboxRef.current.checked = !checkboxRef.current.checked
                    }}>Remember me</span>
                    <input type="checkbox" ref={checkboxRef} />
                </div>
                <Button primary className={cx('login-btn')} onClick={() => { handleLogin() }}>Login</Button>
                <div className={cx('forgot-pass')}>Forgot password <Link to="/forgot">Click here</Link></div>
            </div>
        </div>
    </div>;
}

export default Login;