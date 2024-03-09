import { PartyBigCard } from "@/components/candidate_info/party_big_card";
import { PartySmallCard } from "@/components/candidate_info/party_small_card";
import { Title } from "@/components/title";
import { Flex, Row, Col, Grid } from "antd";

const MockData = [
  {
    partyName: "พลังประชารัฐ",
    partyNo: "1",
  },
  {
    partyName: "พลังประชารัฐ",
    partyNo: "2",
  },
  {
    partyName: "พลังประชารัฐ",
    partyNo: "3",
  },
  {
    partyName: "พลังประชารัฐ",
    partyNo: "4",
  },
  {
    partyName: "พลังประชารัฐ",
    partyNo: "5",
  },
  {
    partyName: "พลังประชารัฐ",
    partyNo: "6",
  },
];

const MockBigCard = [
  {
    application_no: 1,
    name: "พลังประชารัฐ",
    leader: "ประยุทธ์  จันทร์โอชา",
    leader_image:
      "https://pbs.twimg.com/profile_images/1201483636454744065/SOwgoBYn_400x400.jpg",
	  question: ["Question 1", "Question 2", "Question 3", "Question 4"],
	  answer: [
		  ["Answer 11", "Answer 12", "Answer 13"],
		  ["Answer 21", "Answer 22", "Answer 23"],
		  ["Answer 31", "Answer 32", "Answer 33"],
		  ["Answer 41", "Answer 42", "Answer 43"],
	  ]
  },
  {
	application_no: 2,
	name: "พลังประชารัฐ",
	leader: "ประยุทธ์  จันทร์โอชา",
	leader_image:
	  "https://pbs.twimg.com/profile_images/1201483636454744065/SOwgoBYn_400x400.jpg",
	  question: ["Question 1", "Question 2", "Question 3", "Question 4"],
	  answer: [
		  ["Answer 11", "Answer 12", "Answer 13"],
		  ["Answer 21", "Answer 22", "Answer 23"],
		  ["Answer 31", "Answer 32", "Answer 33"],
		  ["Answer 41", "Answer 42", "Answer 43"],
	  ]
  },
  {
    application_no: 3,
    name: "พลังประชารัฐ",
    leader: "ประยุทธ์  จันทร์โอชา",
    leader_image:
      "https://pbs.twimg.com/profile_images/1201483636454744065/SOwgoBYn_400x400.jpg",
	question: ["Question 1", "Question 2", "Question 3", "Question 4"],
	answer: [
		["Answer 11", "Answer 12", "Answer 13"],
		["Answer 21", "Answer 22", "Answer 23"],
		["Answer 31", "Answer 32", "Answer 33"],
		["Answer 41", "Answer 42", "Answer 43"],
	]
  },
];

const TestPage = () => {
  return (
    <Flex style={{ flexDirection: "column", margin: "0 auto" }}>
      <Title
        title="ข้อมูลผู้สมัคร"
        subtitle="คณะกรรมการองค์การบริหารองค์การนักศึกษา"
      />
      <Flex style={{ flexDirection: "row", overflow: "auto" }} gap={10}>
        {MockData.map((data) => (
          <PartySmallCard key={data.partyNo} {...data} />
        ))}
      </Flex>
      <Flex style={{ flexDirection: "column", marginTop: "10px" }} gap={10}>
        {MockBigCard.map((data) => (
          <PartyBigCard key={data.application_no} {...data} />
        ))}
      </Flex>
    </Flex>
  );
};

export default TestPage;
