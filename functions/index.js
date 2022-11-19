const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;
  const env = process.env.NODE_ENV;
  response.json(JSON.stringify({ serviceAccount, env }));
});
