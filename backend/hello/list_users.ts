import { api } from "encore.dev/api";
import { prisma } from "./db";

export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ListUsersResponse {
  users: User[];
}

// Retrieves all users.
export const listUsers = api<void, ListUsersResponse>(
  { expose: true, method: "GET", path: "/users" },
  async () => {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return { users };
  }
);
