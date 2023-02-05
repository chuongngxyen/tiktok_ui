import { forwardRef } from "react";
import { useState } from "react";
import classNames from "classnames";
import styles from './Image.module.scss'
import images from "~/assets/images";
const Image = forwardRef(({ src, className, alt, fallback = images.noImage, ...props }, ref) => {
    const [_fallback, setfallback] = useState('')
    const handleError = () => {
        setfallback(fallback)
    }
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img className={classNames(styles.wrapper, className)} ref={ref} src={_fallback || src} alt={alt} {...props} onError={handleError} />;
})

export default Image;