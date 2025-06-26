import { api } from "encore.dev/api";
import { prisma } from "./db";

export interface CreateUserRequest {
  name: string;
  email: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

// Creates a new user.
export const createUser = api<CreateUserRequest, User>(
  { expose: true, method: "POST", path: "/users" },
  async (req) => {
    const user = await prisma.user.create({
      data: {
        name: req.name,
        email: req.email,
      },
    });
    
    return user;
  }
);
