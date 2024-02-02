import { Col, Empty, Input, Row, Table, Typography } from "antd";
import { getSearchedWord } from "../../../Actions/SearchWordsAction/SearchWords";
import { useState } from "react";

const { Title } = Typography;
const { Search } = Input;
const SearchPage = () => {
  const [data, setData] = useState<any>([]);
  function handleValue(params: string) {
    const payload = {
      word: params,
    };
    getSearchedWord(payload)
      .then(({ data: response, status }) => {
        if (response.success && status === 200) {
          console.log(response);
          setData(response.list);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(params);
  }
  const columns = [
    {
      title: "English Heading",
      dataIndex: "englishHeading",
      key: "englishHeading",
    },
    {
      title: "Arabic Heading",
      dataIndex: "arabicHeading",
      key: "arabicHeading",
    },
    {
      title: "Template",
      dataIndex: "template",
      key: "template",
    },
    {
      title: "Word",
      dataIndex: "word",
      key: "word",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
    },
  ];
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col md={16}>
          <Title level={2} className={`apply-font`}>
            Search
          </Title>
        </Col>
        <Col md={8}>
          <Search
            placeholder="Search the word"
            allowClear
            enterButton
            onSearch={(e) => handleValue(e)}
          />
        </Col>
      </Row>
      <Row>
        <Col md={24}>
          {data.length > 0 ? (
            <>
              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                bordered
              />
            </>
          ) : (
            <Empty className="mt-5" description="No Data Found" />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default SearchPage;
