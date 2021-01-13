// Set up Cloud Functions for Firebase

const { https: { onRequest } } = require("firebase-functions");
const { createSapperServer } = require("./__sapper__/build/server/server"); // eslint-disable-line import/no-unresolved

const appPromise = createSapperServer();

exports.ssr = onRequest(async (...args) => {
	const app = await appPromise;
	return app(...args);
});
