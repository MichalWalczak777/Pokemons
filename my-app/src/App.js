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
import Navigation from "./Components/Navigation";

function App() {
  return  <HashRouter>
              <Navigation/>
              <Switch>
                <Route exact path="/pokemons" component={Pokemons}/>
                <Route path="/pokemons/:name" component={PokemonDetails}/>
              </Switch>
          </HashRouter>;
}

export default App;
