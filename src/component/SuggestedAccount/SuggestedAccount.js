import PropTypes from "prop-types"
import classNames from "classnames/bind";
import styles from "./SuggestedAccount.module.scss"
import AccountItem from "./AccountItem";


const cx = classNames.bind(styles)

function SuggestedAccount({ label, accountSg }) {

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {accountSg && accountSg.map((item) => {
                return <AccountItem item={item} key={item.id} />
            })}

            <p className={cx('see-all')}>See all</p>
        </div>
    );
}
SuggestedAccount.propTypes = {
    label: PropTypes.string
}
export default SuggestedAccount;