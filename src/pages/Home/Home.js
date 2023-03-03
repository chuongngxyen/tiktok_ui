import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import ItemContainer from "../Components/ItemContainer";
import styles from "./Home.module.scss";
import * as serviceAPI from "~/services/serviceApi";

const cx = classNames.bind(styles)
function Home() {
    const soundvideo = 50
    const [itemVideo, setItemvideo] = useState([])
    useEffect(() => {
        const getVideoApi = async () => {
            const result = await serviceAPI.getVideo('for-you', 1)
            console.log(result);
            setItemvideo(result)
        }
        getVideoApi()

    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                {itemVideo && itemVideo.map((item) => {
                    return <ItemContainer key={item.id} soundvideo={soundvideo} videoItem={item} />
                })}


            </div>
        </div>
    );
}

export default Home;