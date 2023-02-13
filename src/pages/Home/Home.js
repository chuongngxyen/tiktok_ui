import classNames from "classnames/bind";

import ItemContainer from "../Components/ItemContainer";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles)
function Home() {
    const soundvideo = 50
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <ItemContainer soundvideo={soundvideo} />
                <ItemContainer soundvideo={soundvideo} />

            </div>
        </div>
    );
}

export default Home;