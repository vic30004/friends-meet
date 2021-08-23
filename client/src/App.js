import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import Home from "./page/Home";
import JoinForm from "./page/JoinForm/JoinForm";
import Video from "./page/video/Video";

function App() {
  return (
    <Router>
      <Fragment>
        <GlobalStyles />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/meeting/:meetingId' component={Video} />
          <Route path='/join/:meetingId' component={JoinForm} />
          <Route path='*'>
            <div>
              <h1>You are in the wrong place</h1>
            </div>
          </Route>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
