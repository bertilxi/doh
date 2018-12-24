import axios from "axios";
import cheerio from "cheerio";
import _ from "lodash";
import { writeFileSync, unlinkSync, existsSync } from "fs";

const baseUrl = "https://www.simpsonizados.org/";

const getLangs = ($: CheerioStatic) => async (
  langIndex: number,
  lang: CheerioElement
) => {
  const href = $(lang).attr("href");
  const { data } = await axios.get(href);
  const $i = cheerio.load(data);
  const iframe = $i("iframe").attr("src");

  return {
    iframe,
    label: $(lang).text()
  };
};

const getChapters = ($: CheerioStatic) => async (
  index: number,
  element: CheerioElement
) => {
  const title = $(element)
    .find("h3")
    .text();

  const image = $(element)
    .find("img")
    .attr("src");

  const description = $(element)
    .find(".desc")
    .text();

  const langs = await Promise.all(
    $(element)
      .find(".boton")
      .map(getLangs($))
      .toArray()
  );

  return {
    chapterNumber: index + 1,
    title,
    image,
    description,
    langs
  };
};

const getSeason = async (seasonNumber: number) => {
  const url = `${baseUrl}simpsons-temporada-${seasonNumber}.html`;
  const { data } = await axios.get(url);

  const $ = cheerio.load(data);
  const chapters = await Promise.all(
    $("div .capitulo")
      .map(getChapters($))
      .toArray()
  );

  const seasonData = {
    seasonNumber,
    chapters
  };

  const file = `./data/season${seasonNumber}.json`;
  if (existsSync(file)) {
    unlinkSync(file);
  }
  writeFileSync(file, JSON.stringify(seasonData), "utf8");

  console.log(`Saved Season ${seasonNumber} !!!`);

  return seasonData;
};

const scrape = async () => {
  const lastSeason = 30;
  const seasons = _.range(1, lastSeason + 1);

  for (const season of seasons) {
    await getSeason(season);
  }

  console.log("Sync finished");
  process.exit();
};

scrape();
