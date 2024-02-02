import {
  Button,
  Col,
  Form,
  Row,
  Select,
  Space,
  Typography,
  Upload,
  UploadFile,
  UploadProps,
  message,
} from "antd";
import { useEffect, useState } from "react";
import { getRootWords } from "../../../Actions/morphemeActions/MorphemeRoutes";
import { UploadOutlined } from "@ant-design/icons";
import { UploadRootFile } from "../../../Actions/RootFileUpload/RootFileUploadAction";
import { RcFile } from "antd/es/upload";
import { useNavigate } from "react-router-dom";
import { arabicAlphabet } from "../../../Constants/Constant";
interface FormRule {
  uploadRootFile: any;
  rootWord: any;
  file?: { file: RcFile; fileList: RcFile[] };
}
export default function RootFileUpload() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { Title } = Typography;
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const [rootLoader, setRootLoader] = useState<boolean>(false);
  const [rootWords, setRootWords] = useState<any>([]);
  const [alphabet, setAlphabet] = useState<any>({});

  useEffect(() => {
    getRootWord();
  }, [alphabet]);

  const onFinish = (values: FormRule) => {
    const formData = new FormData();
    formData.append("name", values.uploadRootFile[0].name);
    formData.append("root_word_id", values.rootWord);
    if (fileList.length > 0) {
      for (const item of fileList) {
        formData.append("file", item as any);
      }
    }

    UploadRootFile(formData)
      .then(({ data: response, status }) => {
        if (response.success === true && status === 200) {
          navigate("/");
          message.success("File Uploaded Successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  function getRootWord() {
    setRootLoader(true);
    getRootWords().then(({ data: response }) => {
      try {
        if (response.success === true) {
          const sortedData = response.list.sort(
            (a: { isExist: any }, b: { isExist: any }) => {
              if (a.isExist && !b.isExist) {
                return -1;
              } else if (!a.isExist && b.isExist) {
                return 1;
              } else {
                return 0;
              }
            }
          );
          const filterRootWords = sortedData.filter((item: any) =>
            item.seperateRootWord.startsWith(alphabet?.alphabet)
          );
          if (filterRootWords?.length > 0) {
            setRootWords(filterRootWords);
          } else {
            setRootWords(sortedData);
          }

          setRootLoader(false);
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);

      return false;
    },
    fileList,
  };
  function handleAlphabetChange(key: string) {
    const payload = {
      alphabet: key,
    };
    setAlphabet(payload)
  }
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col md={24}>
          <Title level={2} className={`apply-font`}>
            Root Word File Upload
          </Title>
        </Col>
        <Col md={12}>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="alphabet"
              label="Arabic Alphabet"
            >
              <Select
                allowClear
                onChange={handleAlphabetChange}
                style={{ width: "100%" }}
                placeholder="Select Arabic Alphabet"
                // onChange={handleRootChange}
                //value={rootWord}
                options={arabicAlphabet?.map((item: any) => ({
                  key: item?.letter,
                  value: item?.letter,
                  label: item?.letter,
                }))}
              />
            </Form.Item>
            <Form.Item
              name="rootWord"
              label="Root Word"
              rules={[{ required: true }]}
            >
              <Select
                allowClear
                loading={rootLoader}
                disabled={rootLoader}
                style={{ width: "100%" }}
                placeholder="Select Root Word"
                // onChange={handleRootChange}
                //value={rootWord}
                options={rootWords?.map((item: any) => ({
                  key: item?.id,
                  value: item?.id,
                  disabled: item?.isExist === false ? true : false,
                  className:
                    item?.isExist === false ? "bg-red-200 !text-black" : "",
                  label: (
                    <>
                      <span className={`apply-font text-base`}>
                        {item?.rootWord}
                      </span>
                    </>
                  ),
                }))}
              />
            </Form.Item>
            <Form.Item
              name="uploadRootFile"
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload {...props} accept=".xls, .xlsx">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
