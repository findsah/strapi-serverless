module.exports = ({ env }) => {
  const connections = {
    postgres: {
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', 3306),
          database: env('DATABASE_NAME', 'strapi'),
          user: env('DATABASE_USERNAME', 'strapi'),
          password: env('DATABASE_PASSWORD', 'strapi')
        },
        debug: false,
      }
    }
  };

  return connections[env('DATABASE_CLIENT', "sqlite")];
};
