import fastify from "fastify";
import Season from "./model/Season";
import Chapter from "./model/Chapter";
import { setupDatabase } from "./database";

const app = fastify();

app.register(require("fastify-cors"));
app.register(require("fastify-helmet"));
app.register(require("fastify-compress"), { brotli: require("iltorb") });

app.get("/", async () => ({
  message: `Welcome to the D'Oh API`,
  version: require("../package.json").version
}));

app.get("/season", () => {
  return Season.query();
});

app.get("/season/:seasonNumber", (request, reply) => {
  const params = request.params;
  return Season.query()
    .where({
      seasonNumber: params.seasonNumber
    })
    .eager("chapters")
    .then(seasons => seasons[0]);
});

app.get("/season/:seasonNumber/chapter/:chapterNumber", (request, reply) => {
  const params = request.params;
  return Chapter.query()
    .where({
      seasonid: params.seasonNumber,
      chapterNumber: params.chapterNumber
    })
    .then(chapters => chapters[0]);
});

app.get("/random", () => {
  return Chapter.query().then(chapters => {
    return chapters[Math.floor(Math.random() * chapters.length)];
  });
});

export const start = async () => {
  await setupDatabase();
  await app.ready();
  await app.listen(3000);
  console.log("Api started @ http://localhost:3000");
};
