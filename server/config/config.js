// config.js
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME;

const uriConnection = {
  dbUrl:
      `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.v4zvi.mongodb.net/${MONGO_HOSTNAME}?retryWrites=true&w=majority`
};

module.exports = uriConnection;
