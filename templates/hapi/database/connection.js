module.exports = ({ client, config }) => {
  const locals = {};

  const connect = async () => {
    if (locals.conn) return locals.conn;

    locals.conn = await client.connect(config.database.connectionString, {
      useUnifiedTopology: true,
    });

    return locals.conn;
  };

  return {
    async getDatabase(dbname) {
      const conn = await connect();
      return conn.db(dbname);
    },
  };
};
