import { PartySmallCard } from "@/components/candidate_info/party_small_card";
import { Title } from "@/components/title";
import { Flex, Row, Col, Grid } from "antd";

const MockData = [
  {
    partyName: "Party A",
    partyNo: "1",
  },
  {
    partyName: "Party B",
    partyNo: "2",
  },
  {
    partyName: "Party C",
    partyNo: "3",
  },
  {
    partyName: "Party D",
    partyNo: "4",
  },
  {
    partyName: "Party E",
    partyNo: "5",
  },
  {
    partyName: "Party F",
    partyNo: "6",
  },
];

const TestPage = () => {
  return (
    <Flex style={{ flexDirection: "column", margin: "0 auto" }}>
      <Title
        title="ข้อมูลผู้สมัคร"
        subtitle="คณะกรรมการองค์การบริหารองค์การนักศึกษา"
      />
      <Flex style={{flexDirection: "row", overflow: "auto"}} gap={10}>
        {MockData.map((data) => (
          <PartySmallCard key={data.partyNo} {...data} />
        ))}
      </Flex>
    </Flex>
  );
};

export default TestPage;
