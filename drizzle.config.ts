import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
	schema: './src/lib/schema/*',
	out: './drizzle',
	driver: 'mysql2',
	dbCredentials: {
		connectionString: process.env.DB_CONNECTION_URL ?? ''
	}
} satisfies Config;
