import { SearchBox } from "../SearchBox";
import LogoImg from "../../assets/logo.svg";
import PersonImg from "../../assets/person.svg";


import "./styles.scss";
import { useAuth } from "../../hooks/useAuth";

export function Navbar() {
  const { user } = useAuth();

  return (
    <nav>
      <img src={LogoImg} alt="logo" />
      <SearchBox />
      <button className="avatar-btn">
        <img src={user.avatar_img || PersonImg} alt="avatar-icon" />
      </button>
    </nav>
  );
}