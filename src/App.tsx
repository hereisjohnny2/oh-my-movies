import { Home } from "./pages/Home";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { MovieSearchProvider } from "./contexts/movieSearchContext";
import "./App.scss";
import { MoviePage } from "./pages/MoviePage";
import { Auth } from "./pages/Auth";
import { AuthContextProvider } from "./contexts/authContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <MovieSearchProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" component={Auth}/>
            <Route path="/movie/:id" component={MoviePage}/>
          </Switch>
        </MovieSearchProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
