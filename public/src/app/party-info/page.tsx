"use client";

import { PartyBigCard } from "@/components/candidate_info/party_big_card";
import { PartySmallCard } from "@/components/candidate_info/party_small_card";
import { Title } from "@/components/title";
import { Flex, } from "antd";
import React, { useState } from "react";

const MockData = [
  {
    partyName: "ก้าวไกล",
    partyNo: 1,
    partyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Move_Forward_Party_Logo.svg/1200px-Move_Forward_Party_Logo.svg.png",
  },
  {
    partyName: "ก้าวไกล",
    partyNo: 2,
    partyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Move_Forward_Party_Logo.svg/1200px-Move_Forward_Party_Logo.svg.png",
  },
  {
    partyName: "ก้าวไกล",
    partyNo: 3,
    partyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Move_Forward_Party_Logo.svg/1200px-Move_Forward_Party_Logo.svg.png",
  },
  {
    partyName: "ก้าวไกล",
    partyNo: 4,
    partyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Move_Forward_Party_Logo.svg/1200px-Move_Forward_Party_Logo.svg.png",
  },
];

const MockBigCard = [
  {
    partyNo: 1,
    name: "ก้าวไกล",
    leader: "พิธา ลิ้มเจริญรัตน์",
    leader_image:
      "https://prod-mfp-imgsrv.tillitsdone.com/uploads/medium_IMG_0575_Pita_Limjaroenrat_a204bc0752.jpg",
    question: ["นโยบาย", "วิสัยทัศน์", "โครงการที่จะทำหากเป็น"],
    answer: [
      ["velit esse cillum dolore eu fugiat nulla pariatur.", "Excepteur sint occaecat.", "sunt in culpa qui officia deserunt mollit anim id est laborum."],
      ["velit esse cillum dolore eu fugiat nulla pariatur.", "Excepteur sint occaecat.", "sunt in culpa qui officia deserunt mollit anim id est laborum."],
      ["velit esse cillum dolore eu fugiat nulla pariatur.", "Excepteur sint occaecat.", "sunt in culpa qui officia deserunt mollit anim id est laborum."],
    ],
	members: [
		{
			firstname: "จอห์น",
			lastname: "นอมเมนเซ่น ดูชัค",
			studentId: "660123456786",
			faculty: "คณะวิศวะกรรมศาสตร์",
			imageUrl: "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
			position: "เลขา"
		},
		{
			firstname: "จอห์น",
			lastname: "นอมเมนเซ่น ดูชัค",
			studentId: "660123456786",
			faculty: "คณะวิศวะกรรมศาสตร์",
			imageUrl: "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
			position: "เหรัญญิก"
		},
		{
			firstname: "จอห์น",
			lastname: "นอมเมนเซ่น ดูชัค",
			studentId: "660123456786",
			faculty: "คณะวิศวะกรรมศาสตร์",
			imageUrl: "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
			position: "คณะกรรมการ"
		},
	]
  },
  {
    partyNo: 2,
    name: "ก้าวไกล",
    leader: "พิธา ลิ้มเจริญรัตน์",
    leader_image:
      "https://prod-mfp-imgsrv.tillitsdone.com/uploads/medium_IMG_0575_Pita_Limjaroenrat_a204bc0752.jpg",
    question: ["นโยบาย", "วิสัยทัศน์", "โครงการที่จะทำหากเป็น"],
    answer: [
      ["velit esse cillum dolore eu fugiat nulla pariatur.", "Excepteur sint occaecat.", "sunt in culpa qui officia deserunt mollit anim id est laborum."],
      ["velit esse cillum dolore eu fugiat nulla pariatur.", "Excepteur sint occaecat.", "sunt in culpa qui officia deserunt mollit anim id est laborum."],
      ["velit esse cillum dolore eu fugiat nulla pariatur.", "Excepteur sint occaecat.", "sunt in culpa qui officia deserunt mollit anim id est laborum."],
    ],
	members: [
		{
			firstname: "จอห์น",
			lastname: "นอมเมนเซ่น ดูชัค",
			studentId: "660123456786",
			faculty: "คณะวิศวะกรรมศาสตร์",
			imageUrl: "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
			position: "เลขา"
		},
		{
			firstname: "จอห์น",
			lastname: "นอมเมนเซ่น ดูชัค",
			studentId: "660123456786",
			faculty: "คณะวิศวะกรรมศาสตร์",
			imageUrl: "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
			position: "เหรัญญิก"
		},
		{
			firstname: "จอห์น",
			lastname: "นอมเมนเซ่น ดูชัค",
			studentId: "660123456786",
			faculty: "คณะวิศวะกรรมศาสตร์",
			imageUrl: "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
			position: "คณะกรรมการ"
		},
	]
  },
  {
    partyNo: 3,
    name: "ก้าวไกล",
    leader: "พิธา ลิ้มเจริญรัตน์",
    leader_image:
      "https://prod-mfp-imgsrv.tillitsdone.com/uploads/medium_IMG_0575_Pita_Limjaroenrat_a204bc0752.jpg",
    question: ["นโยบาย", "วิสัยทัศน์", "โครงการที่จะทำหากเป็น"],
    answer: [
      ["velit esse cillum dolore eu fugiat nulla pariatur.", "Excepteur sint occaecat.", "sunt in culpa qui officia deserunt mollit anim id est laborum."],
      ["velit esse cillum dolore eu fugiat nulla pariatur.", "Excepteur sint occaecat.", "sunt in culpa qui officia deserunt mollit anim id est laborum."],
      ["velit esse cillum dolore eu fugiat nulla pariatur.", "Excepteur sint occaecat.", "sunt in culpa qui officia deserunt mollit anim id est laborum."],
    ],
	members: [
		{
			firstname: "จอห์น",
			lastname: "นอมเมนเซ่น ดูชัค",
			studentId: "660123456786",
			faculty: "คณะวิศวะกรรมศาสตร์",
			imageUrl: "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
			position: "เลขา"
		},
		{
			firstname: "จอห์น",
			lastname: "นอมเมนเซ่น ดูชัค",
			studentId: "660123456786",
			faculty: "คณะวิศวะกรรมศาสตร์",
			imageUrl: "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
			position: "เหรัญญิก"
		},
		{
			firstname: "จอห์น",
			lastname: "นอมเมนเซ่น ดูชัค",
			studentId: "660123456786",
			faculty: "คณะวิศวะกรรมศาสตร์",
			imageUrl: "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
			position: "คณะกรรมการ"
		},
	]
  },
  {
    partyNo: 4,
    name: "ก้าวไกล",
    leader: "พิธา ลิ้มเจริญรัตน์",
    leader_image:
      "https://prod-mfp-imgsrv.tillitsdone.com/uploads/medium_IMG_0575_Pita_Limjaroenrat_a204bc0752.jpg",
    question: ["นโยบาย", "วิสัยทัศน์", "โครงการที่จะทำหากเป็น"],
    answer: [
      ["velit esse cillum dolore eu fugiat nulla pariatur.", "Excepteur sint occaecat.", "sunt in culpa qui officia deserunt mollit anim id est laborum."],
      ["velit esse cillum dolore eu fugiat nulla pariatur.", "Excepteur sint occaecat.", "sunt in culpa qui officia deserunt mollit anim id est laborum."],
      ["velit esse cillum dolore eu fugiat nulla pariatur.", "Excepteur sint occaecat.", "sunt in culpa qui officia deserunt mollit anim id est laborum."],
    ],
	members: [
		{
			firstname: "จอห์น",
			lastname: "นอมเมนเซ่น ดูชัค",
			studentId: "660123456786",
			faculty: "คณะวิศวะกรรมศาสตร์",
			imageUrl: "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
			position: "เลขา"
		},
		{
			firstname: "จอห์น",
			lastname: "นอมเมนเซ่น ดูชัค",
			studentId: "660123456786",
			faculty: "คณะวิศวะกรรมศาสตร์",
			imageUrl: "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
			position: "เหรัญญิก"
		},
		{
			firstname: "จอห์น",
			lastname: "นอมเมนเซ่น ดูชัค",
			studentId: "660123456786",
			faculty: "คณะวิศวะกรรมศาสตร์",
			imageUrl: "https://bigthink.com/wp-content/uploads/2013/07/Profile-Adam-Grant-02.jpg?w=512&h=512&crop=1",
			position: "คณะกรรมการ"
		},
	]
  },
];

const TestPage = () => {
  const firstPartyNo = MockData.length > 0 ? MockData[0].partyNo : null;
  const [selectedParty, setSelectedParty] = useState<number | null>(
    firstPartyNo
  );

  const handleSelectParty = (partyNo: number) => {
    setSelectedParty(partyNo);
  };
  return (
    <Flex style={{ flexDirection: "column", margin: "0 auto" }}>
      <Title
        title="ข้อมูลผู้สมัคร"
        subtitle="คณะกรรมการองค์การบริหารองค์การนักศึกษา"
      />
      <Flex style={{ flexDirection: "row", overflow: "auto", marginBottom: "-15px" }} gap={10}>
        {MockData.map((data) => (
          <PartySmallCard
            key={data.partyNo}
            partyName={data.partyName}
            partyNo={data.partyNo}
            partyLogo={data.partyLogo}
            isSelected={selectedParty === data.partyNo}
            onSelect={() => handleSelectParty(data.partyNo)}
          />
        ))}
      </Flex>
      <Flex style={{ flexDirection: "column", marginTop: "10px" }} gap={10}>
        {selectedParty !== null && (
          <PartyBigCard
            {...MockBigCard[selectedParty - 1]}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default TestPage;
