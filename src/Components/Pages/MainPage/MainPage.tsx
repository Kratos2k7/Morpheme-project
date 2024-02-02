import {
  Typography,
  Row,
  Col,
  Drawer,
  Empty,
  Spin,
  Badge,
  Space,
  Tooltip,
  message,
  Descriptions,
  Button,
} from "antd";
import { arabicAlphabet, morphemes } from "../../../Constants/Constant";
import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { Settings } from "lucide-react";
import SettingPage from "../SettingPage/SettingPage";
import { useAppSelector } from "../../../redux/hook/hook";
import { RootState } from "../../../redux/store";
import {
  getAllMorphemesData,
  getRootWords,
} from "../../../Actions/morphemeActions/MorphemeRoutes";
import { version } from "../../../../package.json";
import DisplayMorphemes from "./DisplayMorphemes/DisplayMorphemes";
import { getVersionInfo } from "../../../Actions/VersionInfo/VersionInfo";
import { useLocation } from "react-router-dom";
import {
  DeleteFilled,
  DownloadOutlined,
  LoadingOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import {
  DeleteFile,
  GetFile,
} from "../../../Actions/RootFileUpload/RootFileUploadAction";
import { DraggableModal } from "ant-design-draggable-modal";
import { getNewWord } from "../../../Actions/MatchingWords/MatchingWords";
import isEqual from "lodash/isEqual";
import * as XLSX from "xlsx";

const { Title } = Typography;
interface WordData {
  word_number: string;
}
export default function MainPage() {
  const {
    morphemeSwitch,
    wordSwitch,
    darkMode,
    quranicWords,
    fonts,
    fontSize,
    color,
    language,
    activeKey,
    rootWordeds,
  } = useAppSelector((state: RootState) => state.settingReducer);

  const [open, setOpen] = useState(false);
  const [saveOpen, showSaveOpen] = useState<boolean>(false);
  const [mainData, setMainData] = useState<any>([]);
  const [rootWords, setRootWords] = useState<any>([]);
  const [saveWords, setSaveWords] = useState<any>([]);
  const [rootWord, setRootWord] = useState<any>({});
  const [alphabet, setAlphabet] = useState<any>({});
  const [saveRootWords, setSaveRootWords] = useState<any>([]);
  const [saveAlphabet, setSaveAlphabet] = useState<any>({});
  const [loader, setLoader] = useState<boolean>(false);
  const [rootLoader, setRootLoader] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);
  const [file, setFile] = useState<string>("");
  const [laravelVer, setlaravelVer] = useState("");
  const [selectedWord, setSelectedWord] = useState<any>([]);
  const [selectedSavedWord, setSelectedSavedWord] = useState<any>("");

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 35 }} spin className="text-green-900" />
  );
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const rootParam = {
    rootWord: searchParams.get("rootWord"),
  };
  const rootWorded = location?.state?.rootWord?.rootWord
    ? location?.state?.rootWord
    : rootParam?.rootWord
    ? rootParam
    : rootWordeds;
  useEffect(() => {
    getLaravelVersion();
    if (rootWords?.length > 0) {
      getMorphemesData();
    } else if (rootWorded) {
      getMorphemesData();
    }
  }, [rootWord]);

  useEffect(() => {
    getRootWord();
  }, [alphabet]);
  useEffect(() => {
    getSaveRootWord();
  }, [saveAlphabet]);

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
  function getSaveRootWord() {
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
            item.seperateRootWord.startsWith(saveAlphabet?.alphabet)
          );
          if (filterRootWords?.length > 0) {
            setSaveRootWords(filterRootWords);
          } else {
            setSaveRootWords(sortedData);
          }
          setRootLoader(false);
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
  function getLaravelVersion() {
    getVersionInfo()
      .then(({ data: response }) => {
        if (response.success === true) {
          setlaravelVer(response.serverVersion);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getMorphemesData() {
    setLoader(true);
    getAllMorphemesData(
      Object.keys(rootWord).length === 0 ? rootWorded : rootWord
    )
      .then(({ data: response }) => {
        try {
          if (response.success === true) {
            const updatedWeightsAndGroups = response?.list?.map(
              (weightGroup: any, index: number) => ({
                ...weightGroup,
                meaning: morphemes[index]?.meaning,
                morpheme: morphemes[index]?.morpheme,
              })
            );
            setMainData(updatedWeightsAndGroups);
            setLoader(false);
          }
        } catch (error) {
          setLoader(false);
        }
      })
      .catch((error) => {
        setLoader(false);
        setMainData([]);
        console.log(error);
      });
  }

  function handleRootChange(key: string) {
    const payload = {
      rootWord: key,
    };
    const data = rootWords?.find((item: any) => item?.englishWord === key);
    GetFile(Number(data?.id))
      .then(({ data: response }) => {
        if (response.success) {
          setFile(response.data);
        } else {
          setFile("");
        }
      })
      .catch((err) => {
        setFile("");
        console.log(err);
      });
    setRootWord(payload);
  }
  function handleModalRootChange(key: string) {
    setSelectedSavedWord(key);
    const payload = {
      rootWord: key,
    };
    getNewWords(payload);
  }
  function handleAlphabetChange(key: string) {
    const payload = {
      alphabet: key,
    };
    setRootWord({});
    delete rootWorded?.rootWord;
    setAlphabet(payload);
  }
  function handleSaveAlphabetChange(key: string) {
    const payload = {
      alphabet: key,
    };
    setSelectedSavedWord("");
    delete rootWorded?.rootWord;
    setSaveAlphabet(payload);
  }

  const showDrawer = () => {
    setOpen(true);
  };
  const showSaveDrawer = () => {
    showSaveOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const handleOk = () => {
    showSaveOpen(false);
    /*  let savedata: any = [...saveWords];
    if (String(rootWorded.rootWord) === String(rootWordeds.rootWord)) {
      const data = results.filter(
        (item: any) => String(item.rootword) === String(rootWordeds.rootWord)
      );
      savedata = saveWords.concat(data);
    }
    dispatch(setResults([]));
    navigate("/saved-words", {
      state: {
        saveWords: savedata,
        rootWord: rootWord.rootWord ? rootWord : rootWordeds,
      },
    });
     */
  };
  const handleSelected = (data: any) => {
    Object.assign(data, { rootword: rootWord.rootWord });
    const filteredSaveWord = saveWords.filter(
      (item: any) => String(item.rootword) === String(rootWord.rootWord)
    );
    setSaveWords([...filteredSaveWord, data]);
    setSelectedSavedWord("");
    setSelected(true);
  };
  const handleSelectedWord = (data: WordData) => {
    setSelectedWord([...selectedWord, data.word_number]);
  };
  function DeleteRootWordFile() {
    const data = rootWords.find(
      (item: any) => item?.englishWord === rootWord?.rootWord
    );
    DeleteFile(Number(data?.id))
      .then(({ data: response, status }) => {
        if (response.success === true && status === 200) {
          setFile("");
          message.success("File Deleted Successfully");
        }
      })
      .catch((err) => {
        message.error(err.response.data.error as string);
      });
  }
  function getNewWords(SavedRootWord: any) {
    const data = saveWords.map((item: any) => ({
      weight: item.weight,
      morpheme_no: item.morpheme_no,
      word_number: item.word_number,
    }));
    const filteredData = data.filter(
      (item: { [s: string]: unknown } | ArrayLike<unknown>) =>
        Object.values(item).some((value) => value !== undefined)
    );
    const payload = {
      rootWord: SavedRootWord.rootWord,
      data: filteredData,
    };

    getNewWord(payload)
      .then(({ data: response, status }) => {
        if (status === 200 && response.success) {
          const filterData = saveWords.filter((item: any) => item.morpheme_no);
          if (response.list.length < filterData.length) {
            const diff = filterData.length - response.list.length;
            for (let i = 0; i < diff; i++) {
              response.list.push({
                word: "-",
                group: "",
                weight: 0,
                subgroup: "",
                template: "-",
                morpheme_no: i,
                word_number: "",
                reference: false,
                matchingWords: [],
              });
            }
          }
          const rootData = response.list.map((item: any) => ({
            rootword: SavedRootWord.rootWord,
            word: item.word,
            template: item.template,
          }));
          const responseList = response.list;
          const data = saveWords.map(
            (item: { [x: string]: any; rootword: any }) => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { rootword, ...newItem } = item;
              return newItem;
            }
          );
          const isNotIncluded = responseList.every((responseItem: any) =>
            data.some((resultItem: any) => isEqual(responseItem, resultItem))
          );
          if (!isEqual(response.list, data)) {
            if (!isNotIncluded) {
              appendToCumulativeData(rootData);
            }
          }
        }
      })
      .catch((err: any) => {
        setLoader(false);
        console.error(err);
      });
  }
  function appendToCumulativeData(newData: any) {
    const cumulativeData = saveWords.concat(newData);
    setSaveWords(cumulativeData);
  }
  const renderGroupedDescriptions = (words: any[]) => {
    const groupedWords: any = {};
    words.forEach((item: { rootword: any }) => {
      const { rootword } = item;
      if (!groupedWords[rootword]) {
        groupedWords[rootword] = [];
      }
      groupedWords[rootword].push(item);
    });
    const firstKey = Object.keys(groupedWords)[0];
    const maxLength = groupedWords[firstKey]?.length;
    return Object.values(groupedWords).map((group: any, index: any) => {
      while (group.length < maxLength) {
        group.push({ rootword: "-", word: "-", template: "-" });
      }

      return (
        <Descriptions
          bordered
          style={{ direction: "rtl" }}
          column={{
            md: group.length,
            xl: group.length,
            xxl: group.length,
            sm: group.length,
            lg: group.length,
          }}
          key={index}
        >
          {group.map((item: any) =>
            item.word_number ? (
              <React.Fragment key={item.word_number}>
                <Descriptions.Item
                  label={item.sub_ar}
                  labelStyle={{ backgroundColor: "white", fontWeight: "bold" }}
                >
                  <b className="text-right">{item.sub_en}</b>
                </Descriptions.Item>
              </React.Fragment>
            ) : null
          )}
          {group.map((item: any) => (
            <React.Fragment key={item.word}>
              <Descriptions.Item label={item.template}>
                {item.word}
              </Descriptions.Item>
            </React.Fragment>
          ))}
        </Descriptions>
      );
    });
  };
  const handleExcel = () => {
    const data = saveWords.reverse().map((item: any) => ({
      wordHeader: item.sub_en,
      word: item.word,
      templateHeader: item.sub_ar,
      template: item.template,
      rootWord: item.rootword,
    }));
    let currentRoot = "";
    const rows: any = [];
    data.forEach(
      (item: {
        wordHeader: any;
        templateHeader: any;
        rootWord: string;
        template: any;
        word: any;
      }) => {
        if (item.rootWord !== currentRoot) {
          rows.push([item.word, item.template]);
          currentRoot = item.rootWord;
        } else {
          rows[rows.length - 1].push(item.word, item.template);
        }
      }
    );
    
    const ws = XLSX.utils.aoa_to_sheet(rows.reverse());
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "SavedWords");
    XLSX.writeFile(wb, "SavedWords.xlsx");
  };
  return (
    <div className="text-gray-950">
      <Row gutter={[16, 16]}>
        <Col md={saveWords?.length > 0 ? 11 : 12}>
          <Title
            level={2}
            className={`apply-font ${
              darkMode ? "!text-white" : "!text-black"
            } `}
            style={{ fontFamily: fonts, fontSize: fontSize }}
          >
            Morphemes{" "}
            {file !== "" && (
              <>
                &nbsp; &nbsp; &nbsp;{" "}
                <Space>
                  <Tooltip title="Download Root Word File" placement="right">
                    <a href={file}>
                      <DownloadOutlined className="text-xl cursor-pointer text-black" />
                    </a>
                  </Tooltip>
                  <Tooltip title="Delete Root Word File" placement="right">
                    <DeleteFilled
                      className="text-xl cursor-pointer text-red-900"
                      onClick={DeleteRootWordFile}
                    />
                  </Tooltip>
                </Space>
              </>
            )}
          </Title>
        </Col>
        <Col md={6} className="text-right">
          <Select
            allowClear
            loading={rootLoader}
            disabled={rootLoader}
            style={{ width: "100%" }}
            placeholder="Select Root Word"
            onChange={handleRootChange}
            value={
              Object.keys(rootWord).length === 0
                ? rootWorded?.rootWord
                : rootWord?.rootWord
            }
            options={rootWords?.map((item: any) => ({
              key: item?.id,
              value: item?.englishWord,
              disabled: item?.isExist === false ? true : false,
              className:
                item?.isExist === false ? "bg-red-200 !text-black" : "",
              label: (
                <>
                  <span
                    className={`apply-font text-base`}
                    style={{ fontFamily: fonts, fontSize: fontSize }}
                  >
                    {item?.rootWord}
                  </span>
                </>
              ),
            }))}
          />
        </Col>
        <Col md={5} className="text-right">
          <Select
            allowClear
            style={{ width: "100%" }}
            placeholder="Select Arabic Alphabet"
            onChange={handleAlphabetChange}
            options={arabicAlphabet?.map((item: any) => ({
              key: item?.letter,
              value: item?.letter,
              label: item?.letter,
            }))}
          />
        </Col>
        <Col md={saveWords?.length > 0 ? 2 : 1} className="pt-1 ">
          <Space>
            <Settings
              className={`apply-font ${
                darkMode ? "!text-white" : "!text-black"
              } cursor-pointer ml-5`}
              onClick={showDrawer}
            />
            {saveWords?.length > 0 && (
              <Badge count={saveWords?.length}>
                <SaveOutlined
                  className={`apply-font ${
                    darkMode ? "!text-white" : "!text-black"
                  } cursor-pointer text-xl ml-5`}
                  onClick={showSaveDrawer}
                />
              </Badge>
            )}
          </Space>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={24}>
          <Spin spinning={loader} size="large" indicator={antIcon}>
            {mainData?.length > 0 ? (
              mainData[0].groups.length > 0 ? (
                <DisplayMorphemes
                  mainData={mainData}
                  darkMode={darkMode}
                  morphemeSwitch={morphemeSwitch}
                  wordSwitch={wordSwitch}
                  quranicWords={quranicWords}
                  fonts={fonts}
                  fontSize={fontSize}
                  color={color}
                  language={language}
                  handleSelected={handleSelected}
                  selected={selected}
                  activeKey={activeKey}
                  saveWords={saveWords}
                  handleSelectedWord={handleSelectedWord}
                  selectedWord={selectedWord}
                  rootWord={
                    Object.keys(rootWord).length === 0 ? rootWorded : rootWord
                  }
                />
              ) : (
                <Empty
                  className=" mt-56"
                  description="We are still working to complete our database. The words for this root have not yet been incorporated into our database.Please check back later."
                />
              )
            ) : (
              <Empty className=" mt-56" />
            )}
          </Spin>
        </Col>
      </Row>
      <Drawer
        width={500}
        title="Settings"
        placement="right"
        onClose={onClose}
        open={open}
        className={`${darkMode ? " !bg-dark-blue !text-white " : ""}`}
        footer={
          <>
            <div
              className={`${
                darkMode
                  ? " bg-dark-blue text-white m-0 p-4 text-center"
                  : "m-0 p-4 text-center"
              }`}
            >
              React {version} &nbsp; Laravel {laravelVer}
            </div>
          </>
        }
      >
        <SettingPage />
      </Drawer>
      <DraggableModal
        title={
          <Row gutter={[16, 16]}>
            <Col md={8}>
              <Title
                level={2}
                className={`apply-font ${
                  darkMode ? "!text-white" : "!text-black"
                } `}
                style={{ fontFamily: fonts, fontSize: fontSize }}
              >
                Saved Words
              </Title>
            </Col>
            <Col md={2}>
              <Button
                type="primary"
                className="bg-green-600 hover:!bg-green-700"
                onClick={handleExcel}
              >
                Export
              </Button>
            </Col>
            <Col md={6}>
              <Select
                allowClear
                disabled={rootLoader}
                style={{ width: "100%" }}
                placeholder="Select Root Word"
                onChange={handleModalRootChange}
                value={selectedSavedWord || undefined}
                options={saveRootWords?.map((item: any) => ({
                  key: item?.id,
                  value: item?.englishWord,
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
            </Col>
            <Col md={8}>
              <Select
                allowClear
                style={{ width: "100%" }}
                placeholder="Select Arabic Alphabet"
                onChange={handleSaveAlphabetChange}
                options={arabicAlphabet?.map((item: any) => ({
                  key: item?.letter,
                  value: item?.letter,
                  label: item?.letter,
                }))}
              />
            </Col>
          </Row>
        }
        closable={false}
        open={saveOpen}
        cancelButtonProps={{ style: { display: "none" } }}
        onOk={handleOk}
        onCancel={handleOk}
        initialWidth={800}
        centered={false}
        initialHeight={500}
        mask={false}
        maskClosable={false}
      >
        {renderGroupedDescriptions(saveWords)}
      </DraggableModal>
    </div>
  );
}
