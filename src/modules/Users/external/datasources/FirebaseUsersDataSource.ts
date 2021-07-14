import { ICreateUserDTO } from "../../domain/dtos/ICreateUserDTO";
import { User } from "../../domain/entities/User";
import { IUsersDataSource } from "../../infra/datasources/IUsersDataSources";
import { db } from "../../../../shared/Firebase";
import { firebase } from "../../../../shared/Firebase";

class FirebaseUsersDataSource implements IUsersDataSource {
  private colRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>

  constructor() {
    this.colRef = db.collection("users");
  }
  
  async create({
    id,
    name,
    avatar_img,
  }: ICreateUserDTO): Promise<User> {
    try {
      const docRef = this.colRef.doc(id);
      await docRef.set({
        name,
        avatar_img,
      }, {merge: true});  
      
      const docData = await docRef.get();

      const user = new User();
      Object.assign(user, {
        id, 
        name,
        avatar_img,
        favoriteMovies: docData.data().favoriteMovies || [],
        watchLaterMovies: docData.data().watchLaterMovies || []
      });

      return user;
    } catch (error) {
      console.log(error);  
    }
  }

  async getUser(userId: string): Promise<User> {
    const doc = await this.colRef.doc(userId).get();
    const user = new User();

    Object.assign(user, {
      id: doc.id,
      name: doc.data().name,
      avatar_img: doc.data().avatar_img,
      favoriteMovies: doc.data().favoriteMovies,
      watchLaterMovies:doc.data().watchLaterMovies,
    });

    return user;
  }

  async getFavoriteMovies(userId: string): Promise<string[]> {
    const doc = await this.colRef.doc(userId).get();
    const favoriteMovies = doc.data().favoriteMovies;

    return favoriteMovies;
  }

  async getWatchLaterMovies(userId: string): Promise<string[]> {
    const doc = await this.colRef.doc(userId).get();
    const watchLaterMovies = doc.data().watchLaterMovies;

    return watchLaterMovies;
  }

  async setFavoriteMovie(userId: string, moviesList: string[]): Promise<void> {
    const docRef = this.colRef.doc(userId);

    await docRef.set({
      favoriteMovies: moviesList
    }, {merge: true});
  }

  async setWatchLaterMovie(userId: string, moviesList: string[]): Promise<void> {
    const docRef = this.colRef.doc(userId);

    await docRef.set({
      watchLaterMovies: moviesList
    }, {merge: true});
  }
}

export { FirebaseUsersDataSource }