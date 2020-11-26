import "./scss/main.scss";
import Pokemons from "./Components/Pokemons";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';
import PokemonDetails from "./Components/PokemonDetails";

function App() {
  return  <HashRouter>
            <Switch>
              <Route exact path="/" component={Pokemons}/>
              <Route path="/:name" component={PokemonDetails}/>
            </Switch>
          </HashRouter>;
}

export default App;
