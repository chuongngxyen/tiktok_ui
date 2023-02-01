import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

//Layout
import { DefaultLayout } from "./component/Layout";
import { Fragment } from "react";


function App() {
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
      </div>
    </Router >

  );
}

export default App;
