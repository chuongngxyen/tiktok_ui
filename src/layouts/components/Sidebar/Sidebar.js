import classNames from "classnames/bind";
import { createContext } from "react";

import Menu from "./Menu";
import config from "~/config";
import styles from "./Sidebar.module.scss"
import { MenuItem } from "./Menu";
import { LiveIcon, HomeIcon, UserGroupIcon, HomeAcitveIcon, UserGroupAcitveIcon, LiveAcitveIcon } from "~/component/Icon";
// import SuggestedAccount from "~/component/SuggestedAccount";
import DiscoverMenu from "./DiscoverMenu";
import FooterSidebar from "./FooterSidebar";
import SuggestedAccount from "~/component/SuggestedAccount/SuggestedAccount";

const cx = classNames.bind(styles)
export const infoContext = createContext()

function Sidebar({ suggested = true }) {

    return (
        <div>
            <div className={cx('div-scrollbar')}>
                <aside className={cx('wrapper')}>
                    <Menu>
                        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeAcitveIcon />}></MenuItem>
                        <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupAcitveIcon />}></MenuItem>
                        <MenuItem title="LIVE" to={config.routes.LIVE} icon={<LiveIcon />} activeIcon={<LiveAcitveIcon />}></MenuItem>
                    </Menu>
                    {suggested && <infoContext.Provider value={true}>
                        <SuggestedAccount label="Suggested accounts" />
                    </infoContext.Provider>}
                    <SuggestedAccount label="Following accounts" />
                    <DiscoverMenu />
                    <FooterSidebar />
                </aside>
            </div>
        </div>
    )
}

export default Sidebar;