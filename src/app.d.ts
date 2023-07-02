declare global {
	namespace App {
		// interface Error {}
		// interface Platform {}
		// interface PageData {}
		interface Locals {
			auth: import('lucia').AuthRequest;
		}
	}
}

/// <reference types="lucia" />
declare global {
	namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;
		type UserAttributes = {
			email: string;
			username: string;
		};
	}
}

// THIS IS IMPORTANT!!!
export {};
