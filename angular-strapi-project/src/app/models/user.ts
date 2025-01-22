export interface User {
    id: number;
    documentId: string;
    username: string;
    email: string;
    provider: string;
    confirmed: Boolean;
    blocked: Boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}