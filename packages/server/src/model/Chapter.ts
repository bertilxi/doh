import { Model, RelationMappings } from "objection";
import Season from "./Season";

interface Lang {
  iframe: string;
  label: string;
}

export default class Chapter extends Model {
  public static tableName = "chapter";
  public static jsonSchema = {
    type: "object",

    properties: {
      id: { type: "integer" },
      chapterNumber: { type: "integer" },
      season: { type: "object" },
      title: { type: "string", minLength: 1, maxLength: 255 },
      image: { type: "string" },
      description: { type: "string" }
    }
  };
  public static modelPaths = [__dirname];
  public static relationMappings: RelationMappings = {
    season: {
      relation: Model.BelongsToOneRelation,
      modelClass: "Season",
      join: {
        from: "chapter.seasonId",
        to: "season.id"
      }
    }
  };
  public readonly id!: number;
  public chapterNumber?: number;
  public title!: string;
  public image!: string;
  public description!: string;
  public langs!: Lang[];

  public season?: Season;

  public $parseDatabaseJson(json: any) {
    json = super.$parseDatabaseJson(json);
    if (json && typeof json.langs === "string") {
      json.langs = JSON.parse(json.langs);
    }
    return json;
  }
}
