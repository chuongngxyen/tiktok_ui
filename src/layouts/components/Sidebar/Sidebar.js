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
import { useEffect, useState } from "react";
import * as serviceApi from "~/services/serviceApi"

export const infoContext = createContext()
const cx = classNames.bind(styles)
const userLogin = JSON.parse(sessionStorage.getItem('user-login'))
function Sidebar({ suggested = true, following = true, infoDes = true }) {
    const [accountSg, setAccouuntsg] = useState(null)
    useEffect(() => {
        const fetchAPIsuggest = async () => {
            const res = await serviceApi.suggested(2, 6)
            console.log(res);
            setAccouuntsg(res)
        }
        fetchAPIsuggest()
        // console.log(accountSg);
    }, []);
    return (
        <div className={cx('div-scrollbar')}>
            <aside className={cx('wrapper')}>
                <Menu>
                    <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeAcitveIcon />}></MenuItem>
                    <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupAcitveIcon />}></MenuItem>
                    <MenuItem title="LIVE" to={config.routes.LIVE} icon={<LiveIcon />} activeIcon={<LiveAcitveIcon />}></MenuItem>
                </Menu>
                {suggested && <infoContext.Provider value={infoDes}>
                    <SuggestedAccount label="Suggested accounts" accountSg={accountSg} />
                </infoContext.Provider>}
                {(following && userLogin) && <SuggestedAccount label="Following accounts" />}
                <DiscoverMenu />
                <FooterSidebar />
            </aside>
        </div>
    )
}

export default Sidebar;