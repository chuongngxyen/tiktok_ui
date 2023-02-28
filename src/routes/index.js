//Layout
//import { HeaderOnly } from "~/layouts";
import { HeaderFooter } from "~/layouts";
import FullWidthLayout from "~/layouts/FullWidthLayout";
//Pages
import config from '~/config'
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Search from "~/pages/Search";
import Upload from "~/pages/Upload";
import Live from "~/pages/Live";
import Login from "~/pages/Login";
import Forgot from "~/pages/Forgot";
import Register from "~/pages/Register";
import ShowCommentsVideo from "~/pages/ShowCommentsVideo";

const publicRoutes = [
    { path: config.routes.forgot, component: Forgot, layout: null },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile, layout: FullWidthLayout },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.upload, component: Upload, layout: HeaderFooter },
    { path: config.routes.LIVE, component: Live, layout: FullWidthLayout },
    { path: config.routes.commentVideo, component: ShowCommentsVideo, layout: null }

]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }