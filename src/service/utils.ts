const firstChapter = 994;
const lastChapter = 1630;

export const getRandomChapter = () => {
  return (
    Math.floor(Math.random() * (lastChapter - firstChapter + 1)) + firstChapter
  ).toString();
};
