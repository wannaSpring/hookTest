import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Index from './containers/index'
import UseMemo from './containers/usememo'
import UseEffect from './containers/UseEffect'
import UseCallback from './containers/usecallback'
import UseContext from './containers/usecontext'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Index />
        </Route>
        <Route path="/usememo">
          <UseMemo />
        </Route>
        <Route path="/useEffect">
          <UseEffect />
        </Route>
        <Route path="/UseCallback">
          <UseCallback />
        </Route>
        <Route path="/UseContext">
          <UseContext />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
