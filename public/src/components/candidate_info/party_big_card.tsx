import { Card, Flex, Image } from "antd";
import { PartyPolicy } from "./party_policy";
import { PartyMemberCard } from "./party_member";

interface PartyBigCardProps {
  partyNo: number;
  name: string;
  leader: string;
  leader_image: string;
  question?: string[];
  answer?: string[][];
  members: {
    firstname: string;
    lastname: string;
    studentId: string;
    faculty: string;
    imageUrl: string;
    position: string;
  }[];
}

export const PartyBigCard = ({
  partyNo,
  name,
  leader,
  leader_image,
  question,
  answer,
  members,
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
          <Flex style={{flexDirection: "column", borderLeftStyle: "solid", borderLeftWidth: "4px", borderLeftColor: "#D9D9D9", paddingLeft: "1em", marginTop: "1em"}}>
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
	  <Flex style={{flexDirection: "column"}}>
		<PartyPolicy question={question} answer={answer} />
		<h4 style={{marginTop: "1em"}}>สมาชิกพรรค</h4>
		{members && members.map((member, index) => (
		  <PartyMemberCard
			key={member.studentId}
			firstname={member.firstname}
			lastname={member.lastname}
			studentId={member.studentId}
			faculty={member.faculty}
			imageUrl={member.imageUrl}
			position={member.position}
		  />
		))}
	  </Flex>
    </Card>
  );
};
