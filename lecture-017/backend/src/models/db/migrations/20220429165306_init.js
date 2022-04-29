/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// Se ejecuta al momento del comando de migraciones
exports.up = function(knex) {
  return knex.schema.createTable('student', table =>{
      table.increments('id').primary();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable().unique();
      table.date('birth_day').notNullable();
      table.timestamps(true, true); // It creates two columns, one called Created_at and the other one Updated_at
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Para hacer rollbacks de lo hecho en up()
exports.down = function(knex) {
    return knex.schema.dropTable('student');
  
};
