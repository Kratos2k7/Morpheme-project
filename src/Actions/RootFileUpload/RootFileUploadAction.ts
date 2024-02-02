import { http } from "../../https";

const GetFile = async (Id:number) =>
  await http.get(`/get-file?root_word_id=${Id}`);
const UploadRootFile = async (data: any) =>
  await http.post(`/upload-file`, data,{ headers : {
    'Content-Type': 'multipart/form-data'
  },});
const DeleteFile = async (Id:number) =>
  await http.delete(`/delete-file?root_word_id=${Id}`);

export {GetFile, UploadRootFile,DeleteFile };
