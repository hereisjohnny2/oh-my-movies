import "./styles.scss";
import GoogleIconImg from "../../assets/google-icon.svg";
import LogoImg from "../../assets/logo.svg";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

export function Auth() {
  const { user, signInWithGoogle } = useAuth();
  const history = useHistory();

  async function handleSignInWithGoogle() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/");
  }

  return (
    <div id="page-auth">
      <main>
        <img src={LogoImg} alt="logo" />
        <p>Find what to watch next!</p>
        <button onClick={handleSignInWithGoogle} className="createRoom">
          <img src={GoogleIconImg} alt="google-icon" />
          Login with Google
        </button>
      </main>
    </div>
  );
}