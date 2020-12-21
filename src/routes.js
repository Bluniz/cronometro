import { Switch, Route } from 'react-router-dom';
import Cronometer from './pages/Cronometer';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Cronometer}/>
  </Switch>
)


export default Routes;