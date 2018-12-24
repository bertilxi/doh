import fastify from "fastify";
import Season from "./model/Season";
import Chapter from "./model/Chapter";
import { setupDatabase } from "./database";

const app = fastify();

app.register(require("fastify-cors"));

app.get("/season", (request, reply) => {
  return Season.query();
});

app.get("/season/:seasonNumber", (request, reply) => {
  const params = request.params;
  return Season.query()
    .where({
      seasonNumber: params.seasonNumber
    })
    .eager("chapters");
});

app.get("/season/:seasonNumber/chapter/:chapterNumber", (request, reply) => {
  const params = request.params;
  return Chapter.query().where({
    seasonid: params.seasonNumber,
    chapterNumber: params.chapterNumber
  });
});

export const start = async () => {
  await setupDatabase();
  await app.ready();
  await app.listen(3000);
  console.log("Api started @ http://localhost:3000");
};
