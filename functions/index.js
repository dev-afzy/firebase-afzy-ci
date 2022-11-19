const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;
  const env = process.env.NODE_ENV;
  const env2 = process.env.VPC_NETWORK;
  const res = JSON.stringify({
    env,
    env2,
    totalEnv: process.env,
    serviceAccount,
  });
  return response.json(res);
});
