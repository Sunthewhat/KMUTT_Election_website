import { Card, Flex, Image } from "antd";
import { PartyPolicy } from "./party_policy";

interface PartyBigCardProps {
  application_no: number;
  name: string;
  leader: string;
  leader_image: string;
  question?: string[];
  answer?: string[][];
}

export const PartyBigCard = ({
  application_no,
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
            <h4 style={{marginRight: "3px"}}>เบอร์</h4>
            <h3>{application_no}</h3>
          </Flex>
          <h3>{name}</h3>
          <Flex style={{flexDirection: "column", borderLeftStyle: "solid", borderLeftWidth: "4px", borderLeftColor: "#D9D9D9", paddingLeft: "10px"}}>
            <p>หัวหน้าพรรค</p>
            <p>{leader}</p>
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
