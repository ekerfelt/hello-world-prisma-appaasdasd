import { db } from "../database/database";
import { PrismaClient } from "../database/generated/client";

export const prisma = new PrismaClient({ 
  datasources: { 
    db: { url: db.connectionString } 
  } 
});
