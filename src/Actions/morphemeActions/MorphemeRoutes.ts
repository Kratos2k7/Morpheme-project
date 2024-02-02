import { http } from "../../https";

const getAllMorphemesData = async (rootWord: any) =>
  await http.post(`/words-by-groups`, rootWord);
const getAllMorphemes = async (rootWord:any) =>
  await http.post(`/get-morphemes` , rootWord);
const getRootWords = async () => await http.get(`/get-root-words`);

export { getAllMorphemesData, getRootWords,getAllMorphemes };
