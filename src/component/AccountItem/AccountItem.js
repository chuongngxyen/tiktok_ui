import classNames from "classnames/bind";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "./AccountItem.module.scss";
import Image from "../Image";

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')}
                src={data.avatar}
                alt={data.nickname} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />}
                </h4>
                <p className={cx('username')}>
                    {data.nickname}
                </p>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: Proptypes.object.isRequired
}
export default AccountItem;