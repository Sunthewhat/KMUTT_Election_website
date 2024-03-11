'use client'

import { CouncilCard } from "@/components/candidate_info/council_card";
import { Title } from "@/components/title";
import { Flex, Layout, Row, Col,} from "antd";

const MockData = [
  {
    firstname: "จอห์น",
    lastname: "นอมเมนเซ่น ดูชัค",
    studentId: "660123456786",
    faculty: "Faculty of Engineering",
    imageUrl: "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
	nickname: "จอห์น",
	motto: "เราจะทำให้สภานักศึกษาเป็นองค์กรที่มีคุณภาพ",
	goal: "เพื่อสร้างสภานักศึกษาที่มีคุณภาพและเป็นที่ยอมรับของสังคม",
  },
  {
    firstname: "จอห์น",
    lastname: "นอมเมนเซ่น ดูชัค",
    studentId: "660123456786",
    faculty: "Faculty of Engineering",
    imageUrl: "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
  },
  {
    firstname: "จอห์น",
    lastname: "นอมเมนเซ่น ดูชัค",
    studentId: "660123456786",
    faculty: "Faculty of Engineering",
    imageUrl: "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
  },
  {
	firstname: "จอห์น",
    lastname: "นอมเมนเซ่น ดูชัค",
    studentId: "660123456786",
    faculty: "Faculty of Engineering",
    imageUrl: "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
  },
  {
    firstname: "จอห์น",
    lastname: "นอมเมนเซ่น ดูชัค",
    studentId: "660123456786",
    faculty: "Faculty of Engineering",
    imageUrl: "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
  },
  {
	firstname: "จอห์น",
    lastname: "นอมเมนเซ่น ดูชัค",
    studentId: "660123456786",
    faculty: "Faculty of Engineering",
    imageUrl: "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
  },
  {
	firstname: "จอห์น",
    lastname: "นอมเมนเซ่น ดูชัค",
    studentId: "660123456786",
    faculty: "Faculty of Engineering",
    imageUrl: "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
  },
  {
	firstname: "จอห์น",
    lastname: "นอมเมนเซ่น ดูชัค",
    studentId: "660123456786",
    faculty: "Faculty of Engineering",
    imageUrl: "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
  },
];

const TestPage = () => {
  return (
    <Flex style={{ flexDirection: "column", margin: "0 auto" }}>
      <Title title="ข้อมูลผู้สมัคร" subtitle="สมาชิกสภานักศึกษา" />
      <Row gutter={[16, 16]} >
        {MockData.map((data) => (
          <Col key={data.studentId} xs={24} xl={8}>
              <CouncilCard  {...data} />
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

export default TestPage;
