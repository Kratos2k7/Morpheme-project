import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllMatchingWords } from "../../../Actions/MatchingWords/MatchingWords";
import Title from "antd/es/typography/Title";
import { Card, Col, Empty, Row } from "antd";
const LandingPage: React.FunctionComponent<any> = () => {
  const [matchingWord, setMatchingWord] = React.useState<any>([]);
  const [data, setData] = React.useState<any>({});
  const [loader, setLoader] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const rootWord = searchParams.get("rootWord");
  const wordId = searchParams.get("wordId");
  React.useEffect(() => {
    matchingWords();
  }, [rootWord, wordId]);
  function matchingWords() {
    setLoader(true);
    const payload = {
      rootWord: rootWord as string,
      wordId: wordId as string,
    };
    getAllMatchingWords(payload)
      .then(({ data: response, status }) => {
        if (status === 200 && response.success) {
          setData(response.list[0]);
          setMatchingWord(response.list[0].matchingWords);
          setLoader(false);
        }
      })
      .catch((err) => {
        setLoader(false);
        setError(err);
      });
  }

  const gridStyle: React.CSSProperties = {
    width: "10%",
    textAlign: "center",
    display: "inline-block",
  };

  function handleNavigate() {
    const payload = {
      rootWord: rootWord as string,
    };
    navigate("/dashboard", { state: { rootWord: payload } });
  }
  return (
    <>
      <Row>
        <Col md={24}>
          <Title level={2}>Matching Words</Title>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col md={24}>
          {!error ? (
            <Card
              loading={loader}
              title={
                <span
                  className="cursor-pointer"
                  onClick={() => handleNavigate()}
                >
                  {data?.word}
                </span>
              }
              extra={data?.template}
            >
              {matchingWord?.map((items: any) => {
                return (
                  <>
                    <Card.Grid
                      style={gridStyle}
                      className={`${
                        Number(items.wordId) === Number(wordId)
                          ? "bg-orange-300 cursor-pointer"
                          : "cursor-pointer"
                      }`}
                      onClick={() =>
                        navigate(
                          `/landingpage?rootWord=${rootWord}&wordId=${items?.wordId}`
                        )
                      }
                    >
                      {items?.reference}
                    </Card.Grid>
                  </>
                );
              })}
            </Card>
          ) : (
            <Empty
              className="font-extrabold text-lg break-words"
              description="We are still working to complete our database. The words for this root have not yet been incorporated into our database.Please check back later. Clink on Dashboard to browse morphemes for other tri-literal root words (الجذر)"
            />
          )}
        </Col>
      </Row>
    </>
  );
};

export default LandingPage;
