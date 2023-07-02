import lucia from "lucia-auth";
import { sveltekit } from "lucia-auth/middleware";
import { planetscale } from "@lucia-auth/adapter-mysql";
import { dev } from "$app/environment";
import { connection } from "./db";

export const auth = lucia({
	env: dev ? "DEV" : "PROD",
	middleware: sveltekit(),
  adapter: planetscale(connection),
  transformDatabaseUser: (user) => {
    return {
      id: user.id,
      email: user.email,
      username: user.username,
    }
  }
});

export type Auth = typeof auth;
