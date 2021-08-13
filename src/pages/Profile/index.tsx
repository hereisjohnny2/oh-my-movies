import { Navbar } from "../../components/Navbar";
import { useAuth } from "../../hooks/useAuth";
import { FavoriteMoviesList } from "../../components/FavoriteMoviesList";
import { WatchLaterMoviesList } from "../../components/WatchLaterMoviesList";
import { LoadingContainer } from "../../components/LoadingContainer";

import "./styles.scss"

export function Profile() {
  const { user } = useAuth();

  return (
    <div id="page-profile">
      <Navbar />
      <main>
        {
        user ?
        <>
          <div className="user-info">
            <img src={user.avatar_img} alt="" />
            <strong>{user.name}</strong> 
            <span>id: {user.id}</span>         
          </div>
          <FavoriteMoviesList />
          <WatchLaterMoviesList />
        </> :
        <LoadingContainer />
        }  
      </main> 
    </div>
  );
}