import classNames from "classnames/bind";
import ItemContainer from "../Components/ItemContainer";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles)
function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <ItemContainer />
                <ItemContainer />

            </div>
        </div>
    );
}

export default Home;