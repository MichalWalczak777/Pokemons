import "./scss/main.scss";
import Pokemons from "./Components/Pokemons";
import Home from "./Components/Home";
import PokemonDetails from "./Components/PokemonDetails";
import Navigation from "./Components/Navigation";

import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';

const App = () => {

  return  (
          <HashRouter>
              <Navigation/>
              <Switch>
              <Route exact path="/" component={Home}/>
                <Route exact path="/pokemons" component={Pokemons}/>
                <Route path="/pokemons/:name" component={PokemonDetails}/>
              </Switch>
          </HashRouter>
          )
}

export default App;
