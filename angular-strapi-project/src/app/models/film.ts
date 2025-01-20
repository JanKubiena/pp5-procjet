import { User } from "./user";

export interface Film {
    id: number;
    documentId: string;
    Title: string;
    Director: string;
    Grade: number;
    user:User;
  }
  
  export interface ApiResponse {
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