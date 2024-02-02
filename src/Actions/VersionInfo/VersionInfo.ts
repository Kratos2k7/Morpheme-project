import { http } from "../../https";
const getVersionInfo = async () => await http.get(`/version-info`);

export { getVersionInfo };
