import _ from "lodash";
import { join, resolve } from "path";

import Season from "./model/Season";
import Chapter from "./model/Chapter";
import { setupDatabase } from "./database";

const rootPath = resolve(process.cwd());

const saveSeason = async (seasonNumber: number) => {
  const fileName = `data/season${seasonNumber}.json`;
  const seasonData = require(join(rootPath, fileName));
  const seasons: Season[] = await Season.query().where({ seasonNumber });

  return Promise.all(
    seasonData.chapters.map((chapter: any) =>
      Chapter.query().insert({
        ...chapter,
        langs: JSON.stringify(chapter.langs),
        seasonId: seasons[0].id
      })
    )
  );
};

const createSeasons = (seasons: number[]) => {
  return Promise.all(
    seasons.map(season =>
      Season.query().insert({
        seasonNumber: season
      })
    )
  );
};

const saveSeasons = async () => {
  await setupDatabase();

  const lastSeason = 30;
  const seasons = _.range(1, lastSeason + 1);
  await createSeasons(seasons);

  for (const season of seasons) {
    await saveSeason(season);
  }

  console.log("Save finished");
  process.exit();
};

saveSeasons();
