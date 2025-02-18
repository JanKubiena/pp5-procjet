import { User } from './user';

export interface Film {
    id: number;
    documentId: string;
    Title: string;
    Director: string;
    Grade: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    FilmStatus: string,
    FilmComment: string,
    Favourite: Boolean,
    user: User;
  }

  export interface PostFilm {
    
    Title: string;
    Director: string;
    Grade: number;
    user: string;
    FilmStatus: string,
    FilmComment: string,
    Favourite: Boolean,
  }
  
  export interface FilmsApiResponse {
    data: Film[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }

  export interface SingleFilmApiResponse {
    data: Film;
    meta: {};
  }

