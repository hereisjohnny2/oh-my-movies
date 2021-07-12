import { useEffect } from "react";
import { useState } from "react";
import { createContext, ReactNode } from "react";
import { User } from "../modules/Users/domain/entities/User";
import { createUserUseCase } from "../modules/Users/domain/useCases/createUserUseCase";
import { firebase, auth } from "../shared/Firebase";

type AuthContextType = {
  user: User | undefined,
  signInWithGoogle(): Promise<void>
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function fetchData(uid: string, displayName: string, photoURL: string) {
      const dbUser = await createUserUseCase.execute({
        id: uid,
        name: displayName,
        avatar_img: photoURL,
      }); 

      setUser(dbUser);
    }

    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error('Missing Information');
        }

        fetchData(uid, displayName, photoURL);       
      }
    });

    return () => {
      unsubscribe();
    }
  }, []);

  async function signInWithGoogle(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);    

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing Information');
      }

      const dbUser = await createUserUseCase.execute({
        id: uid,
        name: displayName,
        avatar_img: photoURL,
      });      

      setUser(dbUser);
    }
  }

  return (
    <AuthContext.Provider 
      value={{
        user,
        signInWithGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}