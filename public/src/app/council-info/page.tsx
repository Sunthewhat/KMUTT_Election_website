import { CouncilCard } from "@/components/candidate_info/council_card";
import { Title } from "@/components/title";
import { Button, Flex, Layout, Row, Col, Grid } from "antd";
const { useBreakpoint } = Grid;

const MockData = [
  {
    name: "John Doe",
    studentId: "123456",
    faculty: "Faculty of Engineering",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1201483636454744065/SOwgoBYn_400x400.jpg",
  },
  {
    name: "John Doe",
    studentId: "123456",
    faculty: "Faculty of Engineering",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1201483636454744065/SOwgoBYn_400x400.jpg",
  },
  {
    name: "John Doe",
    studentId: "123456",
    faculty: "Faculty of Engineering",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1201483636454744065/SOwgoBYn_400x400.jpg",
  },
  {
    name: "John Doe",
    studentId: "123456",
    faculty: "Faculty of Engineering",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1201483636454744065/SOwgoBYn_400x400.jpg",
  },
  {
    name: "John Doe",
    studentId: "123456",
    faculty: "Faculty of Engineering",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1201483636454744065/SOwgoBYn_400x400.jpg",
  },
  {
    name: "John Doe",
    studentId: "123456",
    faculty: "Faculty of Engineering",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1201483636454744065/SOwgoBYn_400x400.jpg",
  },
];

const TestPage = () => {
	// const {xs, sm, md, lg} = useBreakpoint();
	// const flexDir = xs? "column" : sm? "column": md?  "row": lg? "row": "row";
  return (
    // <Flex style={{ flexDirection: `${flexDir}`, width: "80%", margin: "0 auto" }}>
    <Flex style={{ flexDirection: "column", margin: "0 auto" }}>
      <Title title="ข้อมูลผู้สมัคร" subtitle="สมาชิกสภานักศึกษา" />
      <Row gutter={[16, 16]} justify="center">
        {MockData.map((data) => (
          <Col xs={24} xl={8}>
            {/* <Flex justify="space-around"> */}
              <CouncilCard key={data.studentId} {...data} />
            {/* </Flex> */}
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

export default TestPage;
