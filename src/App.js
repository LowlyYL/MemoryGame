import './App.css';
import Greeting from './Components/Greeting/Greeting';
import Rules from './Components/Rules/Rules';
import SignUp from './Components/SignUp/SignUp';
import GameMain from './Components/GameMain/GameMain';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import TableOurPlayers from './Components/TableOurPlayers/TableOurPlayers';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Greeting} exact />
          <Route path="/signup" component={SignUp} exact />
          <Route path="/rules" component={Rules} exact />
          <Route path="/game" component={GameMain} exact />
          <Route path="/tableHighScore" component={TableOurPlayers} exact />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
