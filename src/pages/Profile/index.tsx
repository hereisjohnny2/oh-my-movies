import { Navbar } from "../../components/Navbar";
import { useAuth } from "../../hooks/useAuth";
import { MoviesList } from "../../components/MoviesList";

import "./styles.scss"

export function Profile() {
  const { user } = useAuth();

  return (
    <div id="page-profile">
      <Navbar />
      <main>
        {
        user &&
        <>
          <div className="user-info">
            <img src={user.avatar_img} alt="" />
            <strong>{user.name}</strong> 
            <span>id: {user.id}</span>         
          </div>
          <MoviesList
            title="Favorite Movies"
            movies={user.favoriteMovies}
          />
          <MoviesList 
            title="Watch Later"
            movies={user.watchLaterMovies}
          />
        </>
        }  
      </main> 
    </div>
  );
}