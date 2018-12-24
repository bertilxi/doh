import { Model, RelationMappings } from "objection";
import Chapter from "./Chapter";

export default class Season extends Model {
  public static tableName = "season";
  public static jsonSchema = {
    type: "object",

    properties: {
      id: { type: "integer" },
      seasonNumber: { type: "integer" }
    }
  };
  public static modelPaths = [__dirname];
  public static relationMappings: RelationMappings = {
    chapters: {
      relation: Model.HasManyRelation,
      modelClass: "Chapter",
      join: {
        from: "season.id",
        to: "chapter.seasonId"
      }
    }
  };
  public readonly id!: number;
  public seasonNumber?: number;
  public chapters?: Chapter;
}
