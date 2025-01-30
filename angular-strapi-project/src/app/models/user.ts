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
    BirthDate: Date,
    Gender: string,
    Marketing: Boolean
}

export interface UserRegistration {
    username: string;
    email: string;
    password: string;
}

export interface UserLogin {
    identifier: string;
    password: string;
}