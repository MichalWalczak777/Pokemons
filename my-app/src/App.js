import "./scss/main.scss";
import Pokemons from "./Components/Pokemons";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';

function App() {
  return  <HashRouter>
            <Route exact path="/" component={Pokemons}/>
          </HashRouter>;
}

export default App;
