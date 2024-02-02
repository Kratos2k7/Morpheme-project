import { http } from "../../https";

const getSearchedWord = async (data: any) =>
  await http.post(`/search`, data);

export { getSearchedWord, };
