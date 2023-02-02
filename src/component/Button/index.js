import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss"

const cx = classNames.bind(styles)

function Button({
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
    children, ...passProp }) {
    let Comp = 'button'
    const props = {
        onClick,
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
        Comp = Link
        props.to = to
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
        <Comp className={classes} {...passProp}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;