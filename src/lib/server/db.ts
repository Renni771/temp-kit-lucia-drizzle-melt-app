import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { connect } from '@planetscale/database';
import { DB_CONNECTION_URL } from '$env/static/private';

export const connection = connect({
	url: DB_CONNECTION_URL
});

export const db = drizzle(connection);
