import { Home } from "./pages/Home";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { MovieSearchProvider } from "./contexts/movieSearchContext";
import "./App.scss";
import { MoviePage } from "./pages/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <MovieSearchProvider>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/movie/:id" component={MoviePage}/>
        </Switch>
      </MovieSearchProvider>
    </BrowserRouter>
  );
}

export default App;
