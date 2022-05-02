

# Migrations

## Create migration
npx knex migrate:make init --migrations-directory .\src\models\db\migrations\

## Upload a migration
npx knex migrate:latest --knexfile src/models/db/knexfile.js

## Rollback a migration
npx knex migrate:down --knexfile src/models/db/knexfile.js