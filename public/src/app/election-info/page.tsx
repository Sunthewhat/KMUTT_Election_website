import { Button, Flex, Layout, Row, Col, Grid, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const MockData = [
  {
    title: "กำหนดการและรายละเอียด",
  },
  {
    title: "รายละเอียดการสมัคร",
  },
  {
    title: "ข้อห้ามการหาเสียง",
  },
];

const TestPage = () => {
  return (
    <>
      <Flex
        style={{
          maxWidth: "330px",
          margin: "2% 0 2% 5%",
        }}
      >
        <Typography
          style={{ fontWeight: "bold", padding: "10px", fontSize: "1.17em" }}
        >
          ข้อมูลการเลือกตั้ง
        </Typography>
      </Flex>

      {MockData.map((event) => (
        <Flex
          key={event.title}
          style={{
            width: "80%",
            maxWidth: "360px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "rgba(128, 128, 128, 0.5)",
            borderRadius: "7px",
            height: "fit-content",
            margin: "2% 6%",
          }}
        >
          <Flex
            align="center"
            justify="space-between"
            style={{
              flexDirection: "row",
              width: "100%",
              padding: "10px 20px",
            }}
          >
            <Flex style={{ flexDirection: "column" }}>
              <Typography
                style={{
                  fontSize: "1em",
                  padding: "5px",
                  color:"#3B3B3B"
                }}
              >
                {event.title}
              </Typography>
              <Typography
                style={{
                  fontSize: "1em",
                  padding: "5px",
                }}
              >
                .pdf
              </Typography>
            </Flex>
            <Flex>
              <DownloadOutlined />
            </Flex>
          </Flex>
        </Flex>
      ))}
    </>
  );
};

export default TestPage;
