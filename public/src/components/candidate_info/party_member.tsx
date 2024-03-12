import { Card, Flex, Image } from "antd";

interface CouncilCardProps {
  firstname?: string;
  lastname?: string;
  studentId?: string;
  faculty?: string;
  imageUrl?: string;
  position?: string;
}

export const PartyMemberCard = ({
  firstname,
  lastname,
  studentId,
  faculty,
  imageUrl,
  position,
}: CouncilCardProps) => {
  return (
    <Card style={{marginTop: "1em"}}>
      <Flex >
        <Flex style={{ verticalAlign: "middle", flexDirection: "column" }}>
          <Image
            src={imageUrl}
            alt="Student Image"
            width={120}
            height={150}
            style={{ objectFit: "cover", borderRadius: "4px" }}
          />
        </Flex>
        <Flex style={{ flexDirection: "column", marginLeft: "2em" }}>
          <Flex
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h4 style={{color:'#3B3B3B'}}>{firstname}</h4>
            <h4 style={{color:'#3B3B3B'}}>{lastname}</h4>
            <p style={{color:'#585858'}}>{studentId}</p>
            <p style={{color:'#585858'}}>{faculty}</p>
            <p style={{color:'#585858'}}>{position}</p>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};
