import type { Actions } from './$types';
import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await request.formData();
		const email = form.get('email')?.toString();
		const username = form.get('username')?.toString();
		const password = form.get('password')?.toString();

		if (!email) {
			return fail(400, { message: 'Email is required' });
		}

		if (!username) {
			return fail(400, { message: 'Username is required' });
		}

		if (!password) {
			return fail(400, { message: 'Password is required' });
		}

		try {
			const user = await auth.createUser({
				primaryKey: {
					providerId: 'email',
					providerUserId: email,
					password
				},
				attributes: {
					email,
					username
				}
			});
			const session = await auth.createSession(user.id);
			locals.auth.setSession(session);
		} catch (ex) {
			return fail(400, { message: JSON.stringify(ex) });
		}

		throw redirect(303, '/');
	}
};
