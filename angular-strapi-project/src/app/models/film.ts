import { User } from './user';
import { AuthService } from '../services/authentication.service';

export interface Film {
    id: number;
    documentId: string;
    Title: string;
    Director: string;
    Grade: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    user: User;
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

  export class PostFilm {

    constructor() {}
    
    Title: string = '';
    Director: string = '';
    Grade: number | undefined;
    user: string = "";
  }