import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("season", table => {
    table.increments("id").primary();
    table.integer("seasonNumber").unsigned();
  });
}

export async function down(knex: Knex): Promise<any> {}
