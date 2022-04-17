import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/auth/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route to="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
