//Layout
import { HeaderOnly } from "~/layouts";
//Pages
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Search from "~/pages/Search";
import Upload from "~/pages/Upload";
import Live from "~/pages/Live";
import config from '~/config'
import { HeaderFooter } from "~/layouts";

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.upload, component: Upload, layout: HeaderFooter },
    { path: config.routes.LIVE, component: Live },

]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }