"use client";
import { Flex, Row, Col, Typography } from "antd";
import { useEffect, useState } from "react";

const MockData = [
  {
    title: "ปิดรับสมัครเลือกตั้ง",
    date: new Date("2024-03-10T14:47:00.123456"),
  },
  {
    title: "ประกาศผลการคัดเลือก",
    date: new Date("2024-05-15T10:30:45.123456"),
  },
  {
    title: "แต่งตั้งสมาชิกสภานักศึกษา",
    date: new Date("2024-05-15T10:30:45.123456"),
  },
  {
    title: "ประกาศผลการคัดเลือก",
    date: new Date("2024-05-15T10:30:45.123456"),
  },
  {
    title: "แต่งตั้งสมาชิกสภานักศึกษา",
    date: new Date("2024-05-15T10:30:45.123456"),
  },
  {
    title: "ประกาศผลการคัดเลือก",
    date: new Date("2024-04-15T10:30:45.123456"),
  },
];

function MockDataSorted() {
    MockData.sort((a, b) => a.date.getTime() - b.date.getTime());
    return MockData;
}

interface CountdownData {
  title: string;
  days: number;
  hours: number;
  minutes: number;
}

const CountDown = () => {
  const [countdownData, setCountdownData] = useState<CountdownData[]>([]);

  useEffect(() => {
    MockDataSorted();
    const intervalId = setInterval(() => {
      const updatedCountdownData = MockData.map((event) => {
        const now = new Date();
        const diffInMs = event.date.getTime() - now.getTime();
        const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
        return {
          title: event.title,
          days: days < 0 ? 0 : days,
          hours: hours < 0 ? 0 : hours,
          minutes: minutes < 0 ? 0 : minutes,
        };
      });
      setCountdownData(updatedCountdownData);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

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
          นับเวลาถอยหลัง
        </Typography>
      </Flex>

      <Flex wrap="wrap" justify="space-around" gap={"large"} style={{}}>
        {countdownData.map((event) => (
          <Flex
            key={event.title}
            style={{
              width: "80%",
              maxWidth: "330px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "rgba(128, 128, 128, 0.5)",
              borderRadius: "7px",
            }}
          >
            <Flex
              style={{
                flexDirection: "column",
                padding: "15px",
                width: "100%",
              }}
            >
              <Typography style={getGrayTypoSyle()}>
                {event.title}ในอีก
              </Typography>
              <Row justify="space-around" style={{ marginTop: "15px" }}>
                <Col span={6} style={getColStyle()}>
                  <Typography style={getTypostyle()}>{event.days}</Typography>
                </Col>
                <Col span={6} style={getColStyle()}>
                  <Typography style={getTypostyle()}>{event.hours}</Typography>
                </Col>
                <Col span={6} style={getColStyle()}>
                  <Typography style={getTypostyle()}>
                    {event.minutes}
                  </Typography>
                </Col>
              </Row>
              <Row justify="space-around" style={{ marginTop: "5px" }}>
                <Col span={7} style={getColStyleNoBorder()}>
                  <Typography style={getGrayTypoSyle()}>วัน</Typography>
                </Col>
                <Col span={7} style={getColStyleNoBorder()}>
                  <Typography style={getGrayTypoSyle()}>ชั่วโมง</Typography>
                </Col>
                <Col span={7} style={getColStyleNoBorder()}>
                  <Typography style={getGrayTypoSyle()}>นาที</Typography>
                </Col>
              </Row>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default CountDown;

const getColStyle = () => ({
  border: "1px solid rgba(0, 0, 0, 0.25)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "20px",
  height: "70px",
  boxShadow: "2px 4px 7px rgba(0, 0, 0, 0.3)", // Drop shadow
  filter: "drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.3))", // Inner shadow
});

const getColStyleNoBorder = () => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const getTypostyle = () => ({
  fontWeight: "bold",
  fontSize: "24px",
});

const getGrayTypoSyle = () => ({
  color: "#585858",
  fontSize: "1em",
});
