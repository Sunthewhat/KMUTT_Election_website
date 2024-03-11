import { Card, Flex, Image } from "antd";
import { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

interface CouncilCardProps {
  firstname?: string;
  lastname?: string;
  studentId?: string;
  faculty?: string;
  imageUrl?: string;
  nickname?: string;
  motto?: string;
  goal?: string;
}

export const CouncilCard = ({
  firstname,
  lastname,
  studentId,
  faculty,
  imageUrl,
  nickname,
  motto,
  goal,
}: CouncilCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <Card style={{ width: "352px" }}>
      <Flex justify="space-between">
        <Flex style={{ verticalAlign: "middle", flexDirection: "column" }}>
          <Image
            src={imageUrl}
            alt="Student Image"
            width={120}
            height={150}
            style={{ objectFit: "cover", borderRadius: "4px" }}
          />
        </Flex>
        <Flex style={{ flexDirection: "column" }}>
          <Flex style={{ flexDirection: "row", justifyContent: "flex-end" }}>
		  {showDetails ? (
              <UpOutlined style={{ fontSize: '1em' }} onClick={toggleDetails} />
            ) : (
              <DownOutlined style={{ fontSize: '1em' }} onClick={toggleDetails} />
            )}
          </Flex>
          <Flex
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h4>{firstname}</h4>
            <h4>{lastname}</h4>
            <p>{studentId}</p>
            <p>{faculty}</p>
          </Flex>
        </Flex>
      </Flex>
	  <Flex>
	  	{showDetails && (
              <Flex style={{flexDirection: "column"}}>
                <p style={{marginTop: "1em", color: "#3B3B3B"}}>ชื่อเล่น / ฉายา</p>
                <p style={{color: "#585858"}}>{nickname}</p>
                <p style={{marginTop: "1em", color: "#3B3B3B"}}>คติประจำใจ</p>
                <p style={{color: "#585858"}}>{motto}</p>
                <p style={{marginTop: "1em", color: "#3B3B3B"}}>จุดมุ่งหมายที่จะสมัคร</p>
                <p style={{color: "#585858"}}>{goal}</p>
              </Flex>
            )}
	  </Flex>
    </Card>
  );
};
