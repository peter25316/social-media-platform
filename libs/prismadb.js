import { PrismaClient } from "@prisma/client";

let prisma = PrismaClient;

const client = new PrismaClient();
if (process.env.NODE_ENV != "production") prisma = client;

export default client;
