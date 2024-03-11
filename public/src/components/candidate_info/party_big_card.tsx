import { Card, Flex, Image } from "antd";
import { PartyPolicy } from "./party_policy";

interface PartyBigCardProps {
  partyNo: number;
  name: string;
  leader: string;
  leader_image: string;
  question?: string[];
  answer?: string[][];
}

export const PartyBigCard = ({
  partyNo,
  name,
  leader,
  leader_image,
  question,
  answer,
}: PartyBigCardProps) => {
  return (
    <Card style={{ borderRadius: "0" }}>
      <Flex justify="space-between">
        <Flex style={{flexDirection: "column"}}>
          <Flex>
            <h4 style={{marginRight: "3px", color:'#3B3B3B'}}>เบอร์</h4>
            <h3 style={{color:'#3B3B3B'}}>{partyNo}</h3>
          </Flex>
          <h3>{name}</h3>
          <Flex style={{flexDirection: "column", borderLeftStyle: "solid", borderLeftWidth: "4px", borderLeftColor: "#D9D9D9", paddingLeft: "10px"}}>
            <p style={{color:'#3B3B3B'}}>หัวหน้าพรรค</p>
            <p style={{color:'#585858'}}>{leader}</p>
          </Flex>
        </Flex>
        <Flex>
          <Image
            src={leader_image}
            alt="Student Image"
            width={100}
            height={130}
            style={{ objectFit: "cover", borderRadius: "4px" }}
          />
        </Flex>
      </Flex>
	  <Flex style={{borderLeftStyle: "solid", borderLeftWidth: "4px", borderLeftColor: "#D9D9D9", paddingLeft: "10px"}}>
		<PartyPolicy question={question} answer={answer} />
	  </Flex>
    </Card>
  );
};
