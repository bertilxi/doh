import Knex from "knex";
import { Model } from "objection";

import knexConfigs from "../knexfile";

export const setupDatabase = async () => {
  const env = process.env.NODE_ENV || "development";
  const knexConfig = knexConfigs[env];
  const knex = Knex(knexConfig);
  Model.knex(knex);
};
