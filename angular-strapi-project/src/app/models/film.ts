export interface Film {
    id: number;
    documentId: string;
    Title: string;
    Director: string;
    Grade: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
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