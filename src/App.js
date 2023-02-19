import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

//Layout
import { DefaultLayout } from "~/layouts";
import { Fragment, useState } from "react";
import { useEffect } from "react";
import { GoTopIcon } from "./component/Icon";


function App() {
  //const [scrollY, setScrolly] = useState(0)
  const [displayUP, setdisplayUP] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setdisplayUP(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((curr, index) => {
            let Layout = DefaultLayout
            if (curr.layout) {
              Layout = curr.layout
            }
            else if (curr.layout === null) {
              Layout = Fragment
            }
            const Page = curr.component
            return <Route key={index}
              path={curr.path}
              element={<Layout>
                <Page />
              </Layout>} />
          })}
        </Routes>
        {displayUP && <div onClick={() => {
          document.body.scrollIntoView({ behavior: 'smooth' })
        }} style={{ position: "fixed", right: "2rem", bottom: '5px', backgroundColor: 'rgba(254, 44, 85, 1)', borderRadius: '100%', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><GoTopIcon /></div>}
      </div>
    </Router >

  );
}

export default App;
