export interface ICreateUserDTO {
  id: string;
  name: string;
  avatar_img: string;
  favoriteMovies: string[];
  watchLaterMovies: string[];
}