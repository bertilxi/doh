import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("chapter", table => {
    table.increments("id").primary();
    table
      .integer("seasonId")
      .unsigned()
      .references("id")
      .inTable("season")
      .onDelete("SET NULL");

    table.integer("chapterNumber").unsigned();
    table.string("title");
    table.string("image");
    table.string("description");
    table.string("langs");
  });
}

export async function down(knex: Knex): Promise<any> {}
