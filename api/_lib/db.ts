import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
const { Pool } = pkg;
import { contacts, users } from './schema.js'; // Changed from ../../shared/schema.js
import type { User, InsertUser, Contact, InsertContact } from './schema.js'; // Changed
import { eq, desc } from 'drizzle-orm';

let pool: Pool | null = null;

function getPool() {
  if (!pool) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL must be set');
    }

    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 1,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
      ssl: {
        rejectUnauthorized: false,
      },
    });

    pool.on('error', (err: any) => {
      console.error('Unexpected pool error:', err);
      pool = null;
    });
  }

  return pool;
}

export function getDb() {
  return drizzle(getPool());
}

export const storage = {
  async getUser(id: number): Promise<User | undefined> {
    const db = getDb();
    const result = await db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .limit(1);
    return result[0];
  },

  async getUserByUsername(username: string): Promise<User | undefined> {
    const db = getDb();
    const result = await db
      .select()
      .from(users)
      .where(eq(users.username, username))
      .limit(1);
    return result[0];
  },

  async createUser(insertUser: InsertUser): Promise<User> {
    const db = getDb();
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  },

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const db = getDb();
    const result = await db.insert(contacts).values(insertContact).returning();
    return result[0];
  },

  async getContacts(): Promise<Contact[]> {
    const db = getDb();
    return await db.select().from(contacts).orderBy(desc(contacts.createdAt));
  },
};
