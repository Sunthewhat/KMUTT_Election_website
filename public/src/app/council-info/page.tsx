"use client";

import { useEffect, useState } from "react";
import axiosInstance from "../AxiosInstance";
import { councilCandidateType } from "../interfaces/candidateInfoType";
import { CouncilCard } from "@/components/candidate_info/council_card";
import { Title } from "@/components/title";
import { Flex, Row, Col } from "antd";

const MockData = [
  {
    firstname: "จอห์น",
    lastname: "นอมเมนเซ่น ดูชัค",
    studentId: "660123456786",
    faculty: "คณะวิศวะกรรมศาสตร์",
    imageUrl:
      "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
    nickname: "จอห์น",
    motto: "เราจะทำให้สภานักศึกษาเป็นองค์กรที่มีคุณภาพ",
    goal: "เพื่อสร้างสภานักศึกษาที่มีคุณภาพและเป็นที่ยอมรับของสังคม",
  },
  {
    firstname: "จอห์น",
    lastname: "นอมเมนเซ่น ดูชัค",
    studentId: "660123456786",
    faculty: "คณะวิศวะกรรมศาสตร์",
    imageUrl:
      "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
    nickname: "จอห์น",
    motto: "เราจะทำให้สภานักศึกษาเป็นองค์กรที่มีคุณภาพ",
    goal: "เพื่อสร้างสภานักศึกษาที่มีคุณภาพและเป็นที่ยอมรับของสังคม",
  },
  {
    firstname: "จอห์น",
    lastname: "นอมเมนเซ่น ดูชัค",
    studentId: "660123456786",
    faculty: "คณะวิศวะกรรมศาสตร์",
    imageUrl:
      "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
    nickname: "จอห์น",
    motto: "เราจะทำให้สภานักศึกษาเป็นองค์กรที่มีคุณภาพ",
    goal: "เพื่อสร้างสภานักศึกษาที่มีคุณภาพและเป็นที่ยอมรับของสังคม",
  },
  {
    firstname: "จอห์น",
    lastname: "นอมเมนเซ่น ดูชัค",
    studentId: "660123456786",
    faculty: "คณะวิศวะกรรมศาสตร์",
    imageUrl:
      "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
    nickname: "จอห์น",
    motto: "เราจะทำให้สภานักศึกษาเป็นองค์กรที่มีคุณภาพ",
    goal: "เพื่อสร้างสภานักศึกษาที่มีคุณภาพและเป็นที่ยอมรับของสังคม",
  },
  {
    firstname: "จอห์น",
    lastname: "นอมเมนเซ่น ดูชัค",
    studentId: "660123456786",
    faculty: "คณะวิศวะกรรมศาสตร์",
    imageUrl:
      "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
    nickname: "จอห์น",
    motto: "เราจะทำให้สภานักศึกษาเป็นองค์กรที่มีคุณภาพ",
    goal: "เพื่อสร้างสภานักศึกษาที่มีคุณภาพและเป็นที่ยอมรับของสังคม",
  },
];

const CouncilPage = () => {
  const [candidates, setCandidates] = useState<councilCandidateType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/candidate/AllCandidateTH");
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidate data:", error);
        setCandidates([]);
      }
    };

    fetchData();
  }, []);

  return (
    <Flex style={{ flexDirection: "column", margin: "0 auto" }}>
      <Title title="ข้อมูลผู้สมัคร" subtitle="สมาชิกสภานักศึกษา" />
      <Row gutter={[16, 16]}>
        {candidates.map((data: councilCandidateType) => (
          <Col key={data.studentId} xs={24} xl={8}>
            <CouncilCard {...data} />
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

export default CouncilPage;
