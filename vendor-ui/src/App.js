import MainLayout from "./components/MainLayout";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <MainLayout>
          <Switch>
            {routes.map((item, index) => (
              <Route key={index} path={item.link}>
                {item.component}
              </Route>
            ))}
            <Redirect exact from="/" to="vendor-recommend" />
          </Switch>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
