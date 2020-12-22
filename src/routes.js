import { Switch, Route } from 'react-router-dom';
import Cronometer from './pages/Cronometer';
import Timer from './pages/Timer';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Cronometer}/>
    <Route exact path="/timer" component={Timer}/>
  </Switch>
)


export default Routes;