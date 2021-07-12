import "./styles.scss";
import GoogleIconImg from "../../assets/google-icon.svg";
import LogoImg from "../../assets/logo.svg";
import { useAuth } from "../../hooks/useAuth";

export function Auth() {
  const { user, signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    if (!user) {
      await signInWithGoogle();
    }
  }

  return (
    <div id="page-auth">
      <main>
      <img src={LogoImg} alt="logo" />

      <button onClick={handleSignInWithGoogle} className="createRoom">
        <img src={GoogleIconImg} alt="google-icon" />
        Crie sua sala com o Google
      </button>
      </main>
    </div>
  );
}