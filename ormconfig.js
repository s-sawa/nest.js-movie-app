module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  autoLoadEntities: true,
  // migrationファイル作成時にどのentityファイルを読み込むかの設定
  entities: ['dist/entities/*.entity.js'],
  // どのmigrationファイルでmigrationを行うかの設定
  migrations: ['dist/migrations/*.js'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
};
