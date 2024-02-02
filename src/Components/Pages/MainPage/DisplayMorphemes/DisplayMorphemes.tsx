import {
  CaretRightOutlined,
  InfoCircleFilled,
} from "@ant-design/icons";
import {
  Badge,
  Col,
  Collapse,
  CollapseProps,
  Descriptions,
  Row,
  Space,
  Tabs,
  Tooltip,
} from "antd";
import { pronouns } from "../../../../Constants/Constant";
import { useDispatch } from "react-redux";
import { setGroupActiveKey } from "../../../../redux/Reducers/SettingReducer";
import { useNavigate } from "react-router-dom";

type Props = {
  darkMode: boolean;
  mainData: any;
  morphemeSwitch: boolean;
  wordSwitch: boolean;
  quranicWords: boolean;
  fonts: string;
  fontSize: number;
  color: string;
  language: string[];
  activeKey: string[];
  rootWord: { rootWord: string };
  handleSelected: (value: boolean) => void;
  selected: boolean;
  saveWords: any;
  handleSelectedWord: (value: any) => void;
  selectedWord: any;
};
const { Panel } = Collapse;

const DisplayMorphemes = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newMainData = [...props?.mainData];
  let filteredData = newMainData;
  if (props?.quranicWords === true) {
    filteredData = newMainData.filter(
      (data: any) => data.isReferenceExist === true
    );
  }
  const handleNavigate = (data: any) => {
    navigate(
      `/landingpage?rootWord=${props?.rootWord?.rootWord}&wordId=${data?.word_id[0]}`
    );
  };

  const mainItem: CollapseProps["items"] = filteredData?.map(
    (items: any, i: any) => {
      const newGroup = [...items?.groups];
      let filteredGroup = newGroup;
      if (props?.quranicWords === true) {
        filteredGroup = newGroup.filter(
          (data: any) => data.isReferenceExist === true
        );
      }
      return {
        key: i,
        label: (
          <>
            <Row>
              <Col md={24}>
                <Space>
                  <span
                    className={`apply-font text-lg ${
                      props?.darkMode ? "text-white" : "text-black"
                    }`}
                    style={{
                      fontFamily: props?.fonts,
                      fontSize: props?.fontSize,
                    }}
                  >
                    {items?.morphemeForm !== ""
                      ? items?.morphemeForm
                      : items?.morpheme}
                  </span>
                  {items?.isReferenceExist ? (
                    <Badge key={1} color="red" />
                  ) : null}
                </Space>
              </Col>
            </Row>
            {props?.wordSwitch === true ? (
              <Row>
                <Col md={24}>
                  <span
                    className={`apply-font text-lg ${
                      props?.darkMode ? "text-white" : "text-black"
                    }`}
                    style={{
                      fontFamily: props?.fonts,
                      fontSize: props?.fontSize,
                    }}
                  >
                    {items?.morpheme !== "Broken Plurals"
                      ? items?.morpheme
                      : null}
                  </span>
                </Col>
              </Row>
            ) : null}
          </>
        ),
        extra: (
          <>
            <Row>
              <Col md={24}>
                <span
                  className={`apply-font text-lg ${
                    props?.darkMode ? "text-white" : "text-black"
                  }`}
                  style={{
                    fontFamily: props?.fonts,
                    fontSize: props?.fontSize,
                  }}
                >
                  &nbsp;
                </span>
              </Col>
            </Row>
            {props?.wordSwitch === true ? (
              <Row>
                <Col md={24}>
                  <span
                    className={`apply-font text-lg ${
                      props?.darkMode ? "text-white" : "text-black"
                    }`}
                    style={{
                      fontFamily: props?.fonts,
                      fontSize: props?.fontSize,
                    }}
                  >
                    {items?.meaning}
                  </span>
                </Col>
              </Row>
            ) : null}
          </>
        ),
        className: `bg-gray-100 !border-b-0 rounded-lg mb-2 ${
          props?.darkMode ? "bg-gray-800" : "bg-white"
        }`,
        children: (
          <>
            <Row gutter={[16, 16]}>
              <Col md={24}>
                <Collapse
                  className={`apply-font text-lg ${
                    props?.darkMode ? "bg-gray-900 " : "bg-gray-100 text-dark"
                  }`}
                  bordered={false}
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined
                      style={{ color: props?.darkMode === true ? "white" : "" }}
                      rotate={isActive ? 90 : 0}
                    />
                  )}
                >
                  {filteredGroup &&
                    filteredGroup?.map((values: any, index: number) => {
                      const newSubGroup = [...values?.subGroups];
                      let filteredSubGroup = newSubGroup;
                      if (props?.quranicWords === true) {
                        filteredSubGroup = newSubGroup.filter(
                          (data: any) => data.referenceWordCount > 0
                        );
                      }
                      const sortedData = [...filteredSubGroup].sort((a, b) =>
                        a.key.localeCompare(b.key)
                      );
                      return (
                        <>
                          <Panel
                            key={index}
                            header={
                              <span
                                className={`apply-font text-lg ${
                                  props?.darkMode ? "text-white" : "text-black"
                                }`}
                              >
                                {values?.key}{" "}
                                {values?.isReferenceExist ? (
                                  <Badge key={1} color="red" />
                                ) : null}
                              </span>
                            }
                          >
                            <div>
                              <Tabs
                                centered
                                size="small"
                                defaultActiveKey="1"
                                className={`apply-font text-lg ${
                                  props?.darkMode
                                    ? "bg-gray-900  text-white"
                                    : "text-black"
                                }`}
                                items={sortedData?.map(
                                  (val: any, index: any) => {
                                    const newMainWords = [...val?.mainWords];
                                    let filteredMainWords = newMainWords;
                                    if (props?.quranicWords === true) {
                                      filteredMainWords = val?.mainWords.filter(
                                        (mainWord: { words: any[] }) =>
                                          mainWord.words.some(
                                            (word: { reference: boolean }) =>
                                              word.reference === true
                                          )
                                      );
                                    }
                                    return {
                                      key: index,
                                      label: (
                                        <span
                                          style={{
                                            fontFamily: props?.fonts,
                                            fontSize: props?.fontSize,
                                          }}
                                        >
                                          {props?.language?.length > 0
                                            ? props?.language?.includes(
                                                "English"
                                              )
                                              ? val?.englishHeading !==
                                                undefined
                                                ? val?.englishHeading
                                                : val?.key
                                              : null
                                            : val?.key}{" "}
                                          {props?.language?.includes("Arabic")
                                            ? val?.arabicHeading !== undefined
                                              ? "(" + val?.arabicHeading + ")"
                                              : "(" + val?.template + ")"
                                            : null}
                                          {val?.referenceWordCount ? (
                                            <Badge
                                              className="pl-3"
                                              key={1}
                                              color="red"
                                              count={val?.referenceWordCount}
                                            />
                                          ) : null}
                                        </span>
                                      ),
                                      className: "hover:text-dark-blue",
                                      children: (
                                        <>
                                          <div
                                            style={{
                                              direction: "rtl",
                                              overflow: "auto",
                                            }}
                                            className="overflow-x-auto"
                                          >
                                            <Row gutter={[16, 16]} wrap={false}>
                                              <div
                                                style={{
                                                  position: "sticky",
                                                  right: 0,
                                                  zIndex: 1,
                                                }}
                                                className={`${
                                                  props?.darkMode
                                                    ? "  bg-gray-900"
                                                    : " bg-gray-100"
                                                }`}
                                              >
                                                <Descriptions
                                                  column={{
                                                    md: 1,
                                                    lg: 1,
                                                    xl: 1,
                                                    xxl: 1,
                                                    sm: 1,
                                                    xs: 1,
                                                  }}
                                                  bordered
                                                  className={`apply-font text-lg ${
                                                    props?.darkMode
                                                      ? "  !text-white whitespace-nowrap text-center mr-5  "
                                                      : "!text-black whitespace-nowrap text-center mr-5 "
                                                  }`}
                                                  style={{
                                                    direction: "rtl",
                                                  }}
                                                  layout="horizontal"
                                                  title={
                                                    <span
                                                      className={`apply-font text-lg ${
                                                        props?.darkMode
                                                          ? " !text-white "
                                                          : "!text-black"
                                                      }`}
                                                      style={{
                                                        fontFamily:
                                                          props?.fonts,
                                                        fontSize:
                                                          props?.fontSize,
                                                      }}
                                                    >
                                                      {props?.language?.includes(
                                                        "English"
                                                      )
                                                        ? "Pronouns"
                                                        : "Pronouns"}
                                                      <br />
                                                      {props?.language?.includes(
                                                        "Arabic"
                                                      )
                                                        ? "الضمير"
                                                        : null}
                                                    </span>
                                                  }
                                                >
                                                  {pronouns?.map(
                                                    (
                                                      pronoun: any,
                                                      index: any
                                                    ) => {
                                                      return (
                                                        <>
                                                          <Descriptions.Item
                                                            key={index}
                                                            label={
                                                              pronoun?.meaning
                                                            }
                                                            labelStyle={{
                                                              backgroundColor:
                                                                props?.color,
                                                            }}
                                                            className={`${
                                                              props?.darkMode ===
                                                              true
                                                                ? " !text-white apply-font !text-center"
                                                                : "  !text-black apply-fonts !text-center"
                                                            }`}
                                                            style={{
                                                              fontFamily:
                                                                props?.fonts,
                                                              fontSize:
                                                                props?.fontSize,
                                                              width: "400px",
                                                              height: "60px",
                                                            }}
                                                          >
                                                            <>
                                                              {pronoun?.pronoun}
                                                            </>
                                                          </Descriptions.Item>
                                                        </>
                                                      );
                                                    }
                                                  )}
                                                </Descriptions>
                                              </div>
                                              {filteredMainWords?.map(
                                                (
                                                  value: any,
                                                  indexs: number
                                                ) => {
                                                  let words = [...value?.words];
                                                  if (
                                                    props?.quranicWords === true
                                                  ) {
                                                    words =
                                                      value?.words?.filter(
                                                        (words: any) =>
                                                          words?.reference ===
                                                          true
                                                      );
                                                  }
                                                  const updatedWordsArray = [];

                                                  for (
                                                    let i = 0;
                                                    i <= 15;
                                                    i++
                                                  ) {
                                                    const matchingWord =
                                                      words.find(
                                                        (word) =>
                                                          word.morpheme_no === i
                                                      );

                                                    if (matchingWord) {
                                                      updatedWordsArray.push(
                                                        matchingWord
                                                      );
                                                    } else {
                                                      updatedWordsArray.push({
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
                                                  words = updatedWordsArray;
                                                  return (
                                                    <Descriptions
                                                      column={{
                                                        md: 1,
                                                        lg: 1,
                                                        xl: 1,
                                                        xxl: 1,
                                                        sm: 1,
                                                        xs: 1,
                                                      }}
                                                      bordered
                                                      key={indexs}
                                                      className={`apply-font text-lg ${
                                                        props?.darkMode
                                                          ? "  text-white whitespace-nowrap text-center mr-5 "
                                                          : "text-black whitespace-nowrap text-center mr-5 "
                                                      }`}
                                                      style={{
                                                        direction: "rtl",
                                                      }}
                                                      layout="horizontal"
                                                      title={
                                                        <span
                                                          className={`apply-font text-lg ${
                                                            props?.darkMode
                                                              ? " !text-white"
                                                              : "text-black"
                                                          }`}
                                                        >
                                                          {words?.length > 0 ? (
                                                            <span
                                                              style={{
                                                                fontFamily:
                                                                  props?.fonts,
                                                                fontSize:
                                                                  props?.fontSize,
                                                              }}
                                                            >
                                                              {props?.language?.includes(
                                                                "English"
                                                              )
                                                                ? value?.englishHeading
                                                                  ? value?.englishHeading
                                                                  : value?.key
                                                                : value?.key}
                                                              <br />
                                                              {props?.language?.includes(
                                                                "Arabic"
                                                              )
                                                                ? value?.arabicHeading
                                                                  ? value?.arabicHeading
                                                                  : null
                                                                : null}
                                                            </span>
                                                          ) : undefined}
                                                        </span>
                                                      }
                                                    >
                                                      {words?.map(
                                                        (
                                                          data: any,
                                                          wordindex: number
                                                        ) => {
                                                          return (
                                                            <>
                                                              <Descriptions.Item
                                                                key={wordindex}
                                                                labelStyle={{
                                                                  backgroundColor:
                                                                    props.color,
                                                                  minWidth:
                                                                    "70px",
                                                                  display:
                                                                    props?.wordSwitch ===
                                                                    false
                                                                      ? "none"
                                                                      : "",
                                                                }}
                                                                label={
                                                                  data?.template ===
                                                                  "" ? (
                                                                    "-"
                                                                  ) : (
                                                                    <span
                                                                      className={`${
                                                                        props?.darkMode ===
                                                                        true
                                                                          ? "text-black"
                                                                          : ""
                                                                      }`}
                                                                    >
                                                                      {
                                                                        data?.template
                                                                      }
                                                                    </span>
                                                                  )
                                                                }
                                                                className={`${
                                                                  data?.reference ===
                                                                  true
                                                                    ? props?.darkMode ===
                                                                      true
                                                                      ? "bg-orange-300 !text-white apply-font !text-center"
                                                                      : "bg-orange-300 !text-black apply-font !text-center"
                                                                    : props?.darkMode ===
                                                                      true
                                                                    ? ` !text-white apply-font !text-center `
                                                                    : `  !text-black apply-fonts !text-center `
                                                                }`}
                                                                style={{
                                                                  fontFamily:
                                                                    props?.fonts,
                                                                  fontSize:
                                                                    props?.fontSize,
                                                                  width:
                                                                    "400px",
                                                                  height:
                                                                    "60px",
                                                                }}
                                                              >
                                                                {data?.word ===
                                                                " " ? (
                                                                  "-"
                                                                ) : data?.reference ===
                                                                  true ? (
                                                                  <span
                                                                    style={{
                                                                      cursor:
                                                                        "pointer",
                                                                    }}
                                                                    onClick={() => {
                                                                      props.handleSelected(
                                                                        data
                                                                      ),
                                                                        props.handleSelectedWord(
                                                                          data
                                                                        );
                                                                    }}
                                                                    className="cursor-pointer"
                                                                  >
                                                                    <Tooltip title="Quranic Word">
                                                                      <InfoCircleFilled
                                                                        onClick={() =>
                                                                          handleNavigate(
                                                                            data
                                                                          )
                                                                        }
                                                                        style={{
                                                                          color:
                                                                            props?.color,
                                                                        }}
                                                                      />
                                                                    </Tooltip>
                                                                    <br />
                                                                    {data?.word}
                                                                  </span>
                                                                ) : (
                                                                  <span
                                                                    style={{
                                                                      cursor:
                                                                        "pointer",
                                                                    }}
                                                                    onClick={() => {
                                                                      props.handleSelected(
                                                                        data
                                                                      ),
                                                                        props.handleSelectedWord(
                                                                          data
                                                                        );
                                                                    }}
                                                                  >
                                                                    {data?.word}
                                                                  </span>
                                                                )}
                                                              </Descriptions.Item>
                                                            </>
                                                          );
                                                        }
                                                      )}
                                                    </Descriptions>
                                                  );
                                                }
                                              )}
                                            </Row>
                                          </div>
                                        </>
                                      ),
                                    };
                                  }
                                )}
                                type="card"
                              />
                            </div>
                          </Panel>
                        </>
                      );
                    })}
                </Collapse>
              </Col>
            </Row>
          </>
        ),
      };
    }
  );

  const handlePanelChange = (keys: any) => {
    dispatch(setGroupActiveKey(keys));
  };
  /*    useEffect(() => {
    const matchingKeys: any = [];
    const findMatchingKeys = (items: any) => {
      for (const wieghtItem of items) {
        for (const groupItem of wieghtItem.groups) {
          for (const subGroupItem of groupItem.subGroups) {
            for (const word of subGroupItem.mainWords) {
              for (const matchingWord of word.words) {
                console.log(matchingWord);
                if (matchingWord.matchingWords.length > 0) {
                  for (const matchingWords of matchingWord.matchingWords) {
                    if (matchingWords.id === 1012040006) {
                      matchingKeys.push(word.key);
                      return;
                    }
                  }
                }
              }
            }
          }
        }
      }
    };

    findMatchingKeys(props.mainData);

    console.log(matchingKeys);
  }, []); */

  return (
    <div>
      <Collapse
        activeKey={props?.activeKey}
        onChange={handlePanelChange}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined
            className={`${props?.wordSwitch === true ? "mt-9" : ""} `}
            style={{ color: props.darkMode === true ? "white" : "" }}
            rotate={isActive ? 90 : 0}
          />
        )}
        items={mainItem}
        bordered={false}
      />
    </div>
  );
};

export default DisplayMorphemes;
