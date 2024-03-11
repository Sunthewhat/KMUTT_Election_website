import { Card, Flex, Row, Col } from "antd";

interface PartyPolicyProps {
  question?: string[];
  answer?: string[][];
}

export const PartyPolicy = ({ question, answer }: PartyPolicyProps) => {
  return (
    <Row gutter={16}>
      {question?.map((q, i) => (
        <Col xs={24} xl={8} key={i}>
          <Flex
            style={{
              flexDirection: "column",
              marginTop: "10px",
              borderLeftStyle: "solid",
              borderLeftWidth: "4px",
              borderLeftColor: "#D9D9D9",
              paddingLeft: "1em",
            }}
          >
            <p style={{ color: "#3B3B3B" }}>{q}</p>
            {answer?.[i].map((a, j) => (
              <p key={j} style={{ color: "#585858" }}>
                {a}
              </p>
            ))}
          </Flex>
        </Col>
      ))}
    </Row>
  );
};
