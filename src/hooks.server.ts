import { auth } from "$lib/server/lucia";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  // Let Lucia handle auth on request
	event.locals.auth = auth.handleRequest(event);

	return await resolve(event);
};
