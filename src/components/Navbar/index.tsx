import { SearchBox } from "../SearchBox";
import LogoImg from "../../assets/logo.svg";
import PersonImg from "../../assets/person.svg";


import "./styles.scss";

export function Navbar() {
  return (
    <nav>
      <img src={LogoImg} alt="logo" />
      <SearchBox />
      <button className="avatar-btn">
        <img src={PersonImg} alt="avatar-icon" />
      </button>
    </nav>
  );
}