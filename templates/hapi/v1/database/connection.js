
module.exports = ({ client, config }) => {
  const locals = {}

  const connect = async () => {
    if (locals.conn) return locals.conn

    locals.conn = client.driver(
      config.database.connectionHost,
      client.auth.basic(config.database.user, config.database.password)
    )

    return locals.conn
  }

  return {
    async getConnection () {
      const conn = await connect()
      return conn
    }
  }
}
