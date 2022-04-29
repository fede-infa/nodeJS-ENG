
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host : process.env.HOST || '127.0.0.1',
      port : process.env.PORT_DB || 3306,
      user : process.env.USER_DB || 'root',
      password : '',
      database : 'nodejs'
    }
  }
};
