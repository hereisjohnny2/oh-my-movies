import { Home } from "./pages/Home";
import { MovieSearchProvider } from "./contexts/movieSearchContext";

function App() {
  return (
    <MovieSearchProvider>
      <Home />
    </MovieSearchProvider>
  );
}

export default App;
