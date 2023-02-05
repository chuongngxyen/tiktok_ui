import classNames from "classnames/bind";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss"

const cx = classNames.bind(styles)

const Button = forwardRef(({
    onClick,
    href,
    to,
    className,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    rounded = false,
    disabled = false,
    lefticon,
    righticon,
    children, ...passProp }, ref) => {
    let Comp = 'button'
    const props = {
        onClick,
        ref,
        ...passProp
    }

    //remove event listener
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof key == 'function') {
                delete props[key]
            }
        })
    }

    if (to) {
        props.to = to
        Comp = Link
    }
    else if (href) {
        Comp = 'a'
        props.href = href
    }
    let classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded
    })
    return (
        <Comp className={classes} {...props}>
            {lefticon && <div className={cx('icon')}>{lefticon}</div>}
            <span className={cx('title')}>{children}</span>
            {righticon && <div className={cx('icon')}>{righticon}</div>}
        </Comp>
    );
})

export default Button;