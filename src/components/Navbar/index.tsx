import { SearchBox } from "../SearchBox";
import LogoImg from "../../assets/logo.svg";
import PersonImg from "../../assets/person.svg";


import "./styles.scss";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

export function Navbar() {
  const { user } = useAuth();
  const history = useHistory();

  async function handleShowUserProfilePage() {
    if(!user) {
      alert("You need to login first!");
      history.push("/auth");
    } else {
      history.push("/profile");
    }

  }

  return (
    <nav>
      <img src={LogoImg} alt="logo" />
      <SearchBox />
      <button onClick={handleShowUserProfilePage} className="avatar-btn">
        <img src={
          user ?
          user.avatar_img :
          PersonImg
        } alt="avatar-icon" />
      </button>
    </nav>
  );
}