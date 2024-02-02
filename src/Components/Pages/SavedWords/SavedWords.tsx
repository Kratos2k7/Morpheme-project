/* eslint-disable @typescript-eslint/no-unused-vars */
import { Row, Col, Descriptions, Spin, Select, Button, Space } from "antd";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getNewWord } from "../../../Actions/MatchingWords/MatchingWords";
import { getRootWords } from "../../../Actions/morphemeActions/MorphemeRoutes";
import { useAppSelector } from "../../../redux/hook/hook";
import { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import isEqual from "lodash/isEqual";
import {
  setResults,
  setRootWord,
} from "../../../redux/Reducers/SettingReducer";
import * as XLSX from 'xlsx';

const SavedWords = () => {
  const { results, rootWordeds } = useAppSelector(
    (state: RootState) => state.settingReducer
  );
  const [saveWord, setSaveWords] = useState<any>([]);
  const [result, setResult] = useState<any>(results);
  const [rootWords, setRootWords] = useState<any>({});
  const [loader, setLoader] = useState<any>({});
  const [rootLoader, setRootLoader] = useState<boolean>(false);
  const [rootWordss, setRootWordss] = useState<any>([]);

  const Location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const {
      state: { saveWords, rootWord },
    } = Location;

    dispatch(setRootWord(rootWord));
    setSaveWords(saveWords ? saveWords : results);
    setRootWords(rootWord ? rootWord : rootWordeds);
  }, []);

  useEffect(() => {
    if (rootWords.rootWord && saveWord.length > 0) {
      getNewWords();
      getRootWord();
    }
  }, [rootWords, saveWord]);

  function getNewWords() {
    setLoader(true);
    const data = saveWord.map((item: any) => ({
      weight: item.weight,
      morpheme_no: item.morpheme_no,
      word_number: item.word_number,
    }));
    const payload = {
      rootWord: rootWords.rootWord,
      data,
    };
    getNewWord(payload)
      .then(({ data: response, status }) => {
        if (status === 200 && response.success) {
          if (response.list.length < saveWord.length) {
            // Calculate the number of empty objects needed to match the desired length
            const diff = saveWord.length - response.list.length;

            // Add empty objects to the response list to match the desired length
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
          const responseList = response.list;
          const data = results.map(
            (item: { [x: string]: any; rootword: any }) => {
              const { rootword, ...newItem } = item;
              return newItem;
            }
          );
          // Check if any element in response.list is not found in results
          const isNotIncluded = responseList.every((responseItem: any) =>
            data.some((resultItem: any) => isEqual(responseItem, resultItem))
          );
          if (!isEqual(response.list, data)) {
            if (!isNotIncluded) {
              appendToCumulativeData(response.list);
            }
          }
          setLoader(false);
        } else {
          setLoader(false);
        }
      })
      .catch((err: any) => {
        setLoader(false);
        console.error(err);
      });
  }
  function appendToCumulativeData(newData: any) {
    const responseListWithRootWord = newData.map((item: any) => ({
      ...item,
      rootword: rootWords.rootWord,
    }));

    const cumulativeData = result.concat(responseListWithRootWord);

    setResult(cumulativeData);
    dispatch(setResults(cumulativeData));
  }

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

          setRootWordss(sortedData);

          setRootLoader(false);
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
  function handleRootChange(key: string) {
    const payload = {
      rootWord: key,
    };
    setRootWords(payload);
  }
  const exportToExcel = () => {
    const data = result.map((item: { template: any; word: any; }) => ({
      word: item.word,
      template: item.template,
    }));
  
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'SavedWords');
    XLSX.writeFile(wb, 'SavedWords.xlsx');
  };
  return (
    <div className="text-gray-950">
      <Row gutter={[16, 16]}>
        <Col md={12}>
          <Title level={2} className={`apply-font `}>
            Saved Words
          </Title>
        </Col>
        <Col md={6} className="text-right">
          <Space>
            <Button
              type="primary"
              className="bg-green-500 hover:bg-green-600"
              onClick={exportToExcel}
            >
              Export
            </Button>
            <Button
              type="primary"
              onClick={() => {
                dispatch(setResults([]));
                dispatch(setRootWord({}));
                setRootWords({});
                navigate("/");
              }}
            >
              Reset
            </Button>
          </Space>
        </Col>
        <Col md={6} className="text-right">
          <Select
            allowClear
            loading={rootLoader}
            disabled={rootLoader}
            style={{ width: "100%" }}
            placeholder="Select Root Word"
            onChange={handleRootChange}
            value={rootWords?.rootWord}
            options={rootWordss?.map((item: any) => ({
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
        <Col md={24}>
          <Spin spinning={loader}>
            <Descriptions
              bordered
              title="Saved Words"
              style={{ direction: "rtl" }}
              column={{
                md: saveWord.length,
                xl: saveWord.length,
                xxl: saveWord.length,
                sm: saveWord.length,
                lg: saveWord.length,
              }}
            >
              {saveWord.length > 0
                ? saveWord.map((item: any) => {
                    return (
                      <>
                        <Descriptions.Item>
                          <b className="text-center">
                            {item.sub_en +
                              " " +
                              "(" +
                              item.sub_ar +
                              ")" +
                              " " +
                              item.word_number}
                          </b>
                        </Descriptions.Item>
                      </>
                    );
                  })
                : null}
              {result.length > 0
                ? result.map((item: any) => {
                    return (
                      <>
                        <Descriptions.Item label={item.template}>
                          {item.word}
                        </Descriptions.Item>
                      </>
                    );
                  })
                : null}
            </Descriptions>
          </Spin>
        </Col>
      </Row>
    </div>
  );
};

export default SavedWords;
