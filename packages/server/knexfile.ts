// Update with your config settings.

const knexConfigs: any = {
  development: {
    useNullAsDefault: true,
    client: "sqlite3",
    connection: {
      filename: "./db.sqlite3"
    }
  },

  production: {
    useNullAsDefault: true,
    client: "sqlite3",
    connection: {
      filename: "./db.sqlite3"
    }
  }
};

export default knexConfigs;
module.exports = knexConfigs;
