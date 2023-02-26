import Proptypes from "prop-types"
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
    discover = false,
    showmusic = false,
    loginoption = false,
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
        rounded,
        discover,
        showmusic,
        loginoption
    })
    return (
        <Comp className={classes} {...props}>
            {lefticon && <div className={cx('icon', 'left-icon')}>{lefticon}</div>}
            <span className={cx('title')}>{children}</span>
            {righticon && <div className={cx('icon')}>{righticon}</div>}
        </Comp>
    );
})
Button.propTypes = {
    onClick: Proptypes.func,
    href: Proptypes.string,
    to: Proptypes.string,
    className: Proptypes.string,
    primary: Proptypes.bool,
    outline: Proptypes.bool,
    small: Proptypes.bool,
    large: Proptypes.bool,
    text: Proptypes.bool,
    rounded: Proptypes.bool,
    disabled: Proptypes.bool,
    discover: Proptypes.bool,
    showmusic: Proptypes.bool,
    loginoption: Proptypes.bool,
    children: Proptypes.node.isRequired,
}
export default Button;